import React, { useState } from 'react'

import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import Button from '@/components/buttons/Button'

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ethereum?: any
	}
}

const web3 = new Web3(window.ethereum!)

export const ButtonMetamaskWallet = () => {
	const [, setMetamaskWallet] = useState<{ address: string } | null>(null)

	const connectWallet = async () => {
		if (!window.ethereum) {
			toast.error('MetaMask not detected!')
			return
		}

		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' })
			const accounts = await web3.eth.getAccounts()
			if (accounts.length === 0) return

			setMetamaskWallet({ address: accounts[0] })
			// await fetchBalance()
			// await fetchNetwork()
		} catch (error) {
			console.error('Failed to connect wallet:', error)
			toast.error('Failed to connect wallet.')
		}
	}

	// const sendTransaction = async () => {
	// 	const recipient = '0x8f4b22e6817984d376e8a1fa8f04edb705673c9e'
	// 	const amount = '1'

	// 	if (!wallet || !recipient || !amount) return

	// 	try {
	// 		if (isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
	// 			toast.error('Invalid amount entered')
	// 			return
	// 		}

	// 		const valueInWei = web3.utils.toWei(amount, 'ether')
	// 		// const valueInWei = web3.utils.toBN(amount).mul(web3.utils.toBN(10).pow(web3.utils.toBN(6)))

	// 		console.log('amount', amount)
	// 		console.log('valueInWei', valueInWei)
	// 		console.log('valueInWei', typeof valueInWei)
	// 		console.log('Sending:', amount, 'KAIA =>', valueInWei, 'Wei')
	// 		const txHash = await window.ethereum.request({
	// 			method: 'eth_sendTransaction',
	// 			params: [
	// 				{
	// 					from: wallet.address,
	// 					to: recipient,
	// 					value: valueInWei,
	// 					gas: web3.utils.toHex(21000),
	// 				},
	// 			],
	// 		})

	// 		setTxHash(txHash)
	// 		toast.success('Transaction Sent!')
	// 		fetchBalance()
	// 	} catch (error) {
	// 		console.error('Transaction Failed:', error)
	// 		toast.error('Transaction Failed')
	// 	}
	// }

	return (
		<>
			<Button
				onClick={connectWallet}
				className='flex w-full cursor-not-allowed flex-row items-center gap-2 hover:border-purple-300 hover:bg-purple-50'>
				<IoWalletOutline />
				Connect with Metamask
			</Button>
		</>
	)
}
