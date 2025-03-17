import React from 'react'

import { useSetAtom } from 'jotai'
import { PiCoinsLight } from 'react-icons/pi'
import { toast } from 'react-toastify'
import Web3, { Web3Account } from 'web3'

import { txHashesAtom } from '@/stores/atoms'

import Button from '../Button'

type FaucetType = {
	web3: Web3
	wallet: Web3Account
	fetchBalance: () => void
}

export const Faucet = ({ web3, wallet, fetchBalance }: FaucetType) => {
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
			<p className='text-2xl font-bold text-[#5e5e5e]'>Faucet</p>
			<Button onClick={getToken} width='w-[200px] flex flex-row gap-2'>
				<PiCoinsLight />
				Get 0.01 KAIA
			</Button>
		</>
	)
}
