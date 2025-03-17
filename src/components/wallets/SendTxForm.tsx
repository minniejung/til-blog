import React, { useEffect, useState } from 'react'

import { useSetAtom } from 'jotai'
import Web3, { Web3Account } from 'web3'

import { txHashesAtom } from '@/stores/atoms'

import Button from '../Button'

type SendTxFormType = {
	web3: Web3
	wallet: Web3Account
	balance: string
	fetchBalance: () => void
}

export const SendTxForm = ({ web3, wallet, balance, fetchBalance }: SendTxFormType) => {
	const [recipient, setRecipient] = useState<string>('')
	const [amount, setAmount] = useState<string>('')
	const [gasFee, setGasFee] = useState<string>('0')

	const setTxHashes = useSetAtom(txHashesAtom)

	const maxSpendable = (parseFloat(balance) - parseFloat(gasFee)).toFixed(6)

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

			// Apply 10% increase directly
			const increasedGas = Math.ceil(Number(estimatedGas) * 1.1)
			const gasFeeWei = BigInt(increasedGas) * BigInt(gasPrice)
			const gasFeeEth = web3.utils.fromWei(gasFeeWei.toString(), 'ether')

			console.log('gasFeeWei', gasFeeWei)
			console.log('gasFeeEth', gasFeeEth)

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
		} catch (error) {
			console.error('Transaction Failed:', error)
		}
	}

	useEffect(() => {
		if (amount) {
			estimateGasFee()
		}
	}, [amount])

	return (
		<>
			<p className='text-2xl font-bold text-[#5e5e5e]'>Send transaction</p>
			<div className='flex w-[500px] flex-col gap-4'>
				<div className='flex flex-col gap-6 rounded-lg border border-gray-300 p-4'>
					<div className='flex flex-col gap-2'>
						<label className='w-[90px] font-bold'>Recipient</label>
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
						<label className='w-[90px] font-bold'>Amount</label>
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
						<div className='mt-1 space-y-1'>
							<p className='text-right text-xs text-gray-500'>Available: {balance} KAIA</p>
							<p className='text-right text-xs text-gray-500'>Estimated Gas Fee: {gasFee} KAIA</p>
							<p className='text-right text-xs text-gray-500'>Max Spendable: {maxSpendable} KAIA</p>
						</div>
					</div>
				</div>

				{(Number(maxSpendable) <= 0 || Number(balance) <= 0 || Number(amount) > Number(maxSpendable)) && (
					<p className='text-center text-xs font-bold text-red-500'>Not enough balance</p>
				)}

				<Button
					onClick={sendTransaction}
					disabled={Number(maxSpendable) <= 0 || Number(balance) <= 0 || Number(amount) > Number(maxSpendable)}
					className='bg-blue-500 text-white'>
					SEND
				</Button>
			</div>
		</>
	)
}
