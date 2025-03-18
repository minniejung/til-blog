import React from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import { MdWaterDrop } from 'react-icons/md'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import { txHashesAtom, web3WalletAtom } from '@/stores/atoms'

import Button from '../buttons/Button'

type FaucetType = {
	web3: Web3
	fetchBalance: () => void
}

export const Faucet = ({ web3, fetchBalance }: FaucetType) => {
	const wallet = useAtomValue(web3WalletAtom)
	const setTxHashes = useSetAtom(txHashesAtom)

	const getToken = async () => {
		const from = process.env.NEXT_PUBLIC_METAMASK_ADDRESS
		const privateKey = process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY

		try {
			const value = web3.utils.toWei('0.01', 'ether')
			const gasPrice = await web3.eth.getGasPrice()
			const tx = {
				from,
				to: wallet?.address,
				value,
				gas: 21000,
				gasPrice,
			}

			const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey || '')
			const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)

			setTxHashes(prev => [...prev, String(sentTx.transactionHash)])

			fetchBalance()
			toast.success('Transaction Sent!')
		} catch (error) {
			console.error('Transaction Failed:', error)
		}
	}

	return (
		<>
			{/* <p className='text-2xl font-bold text-[#5e5e5e]'>Faucet</p> */}
			<Button onClick={getToken} className='flex w-[200px] flex-row items-center gap-2'>
				<MdWaterDrop className='text-xl text-blue-500' />
				Get 0.01 KAIA
			</Button>
		</>
	)
}
