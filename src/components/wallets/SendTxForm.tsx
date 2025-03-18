import React, { useEffect, useState } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import { TbTransfer } from 'react-icons/tb'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import { balanceAtom, txHashesAtom, web3WalletAtom } from '@/stores/atoms'

import Button from '../buttons/Button'
import { ErrorMessage } from '../ErrorMessage'

type SendTxFormType = {
	web3: Web3
	fetchBalance: () => void
}

export const SendTxForm = ({ web3, fetchBalance }: SendTxFormType) => {
	const wallet = useAtomValue(web3WalletAtom)
	const balance = useAtomValue(balanceAtom)

	const [recipient, setRecipient] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	const [gasFee, setGasFee] = useState<string>('0')

	const setTxHashes = useSetAtom(txHashesAtom)

	const maxSpendable = (parseFloat(balance) - parseFloat(gasFee)).toFixed(6)

	const InsufficientBalance = Number(maxSpendable) <= 0 || Number(balance) <= 0 || Number(amount) > Number(maxSpendable)

	const estimateGasFee = async () => {
		if (!wallet || !recipient || !amount || isNaN(Number(amount))) return

		try {
			const value = web3.utils.toWei(amount, 'ether')
			const gasPrice = await web3.eth.getGasPrice()

			const estimatedGas = await web3.eth.estimateGas({
				from: wallet.address,
				to: recipient,
				value,
			})

			if (!gasPrice || !estimatedGas) throw new Error('Failed to get gas estimate.')

			const increasedGas = Math.ceil(Number(estimatedGas) * 1.1)
			const gasFeeWei = BigInt(increasedGas) * BigInt(gasPrice)
			const gasFeeEth = web3.utils.fromWei(gasFeeWei.toString(), 'ether')

			const maxSpendable = parseFloat(balance) - parseFloat(gasFeeEth)
			if (maxSpendable < 0) {
				throw new Error('Insufficient balance to cover gas fees')
			}

			setGasFee(gasFeeEth)
		} catch (error) {
			console.error('Failed to estimate gas:', error)
			setGasFee('0')
		}
	}

	const sendTransaction = async () => {
		if (!wallet || !recipient || !amount) return

		try {
			const value = web3.utils.toWei(amount, 'ether')
			const gasPrice = await web3.eth.getGasPrice()

			const tx = {
				from: wallet.address,
				to: recipient,
				value,
				gas: 21000,
				gasPrice,
			}

			const signedTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey)
			const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

			setTxHashes(prev => [...prev, String(sentTx.transactionHash)])
			fetchBalance()
			setRecipient('')
			setAmount('')

			toast.success('Transaction Successful!')
		} catch (error) {
			console.error('Transaction Failed:', error)
			toast.error('Transaction failed')
		}
	}

	useEffect(() => {
		if (amount) {
			estimateGasFee()
		}
	}, [amount])

	return (
		<>
			<div className='flex w-[500px] flex-col space-y-2 rounded-lg border border-gray-300 p-4'>
				<div className='flex pb-2 font-bold text-gray-600'>
					<span className='flex flex-row items-center gap-2'>
						<TbTransfer className='text-2xl' />
						Send transaction
					</span>
				</div>

				<hr className='pb-2' />

				<div className='flex flex-col gap-6'>
					<div className='flex flex-col gap-2'>
						<label className='ml-2 font-bold'>Recipient</label>
						<input
							type='text'
							placeholder='받는 주소'
							value={recipient}
							onChange={e => {
								setRecipient(e.target.value)
								estimateGasFee()
							}}
							className='flex w-full rounded-lg border border-gray-400 p-2'
						/>
					</div>

					<div className='relative flex flex-col gap-2'>
						<label className='ml-2 font-bold'>Amount</label>
						<input
							type='text'
							placeholder='보낼 금액 (KAIA)'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='flex w-full rounded-lg border border-gray-400 p-2'
						/>
						<button
							type='button'
							onClick={() => setAmount(Number(maxSpendable) > 0 ? maxSpendable : '0')}
							className='absolute right-2 top-10 px-3 py-1 text-sm font-bold text-orange-500'>
							Max
						</button>

						<div className='m-2 space-y-1'>
							<p className='text-right text-xs text-gray-500'>Available: {balance} KAIA</p>
							<p className='text-right text-xs text-gray-500'>Estimated Gas Fee: {gasFee} KAIA</p>
							<p className='text-right text-xs text-gray-500'>Max Spendable: {maxSpendable} KAIA</p>
						</div>
					</div>
				</div>

				<ErrorMessage condition={InsufficientBalance}>Insufficient balance</ErrorMessage>

				<Button onClick={sendTransaction} disabled={InsufficientBalance} className='bg-blue-500 text-white'>
					SEND
				</Button>
			</div>
		</>
	)
}
