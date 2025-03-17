'use client'

import React, { useEffect, useState } from 'react'

import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3, { Web3Account } from 'web3'

import Button from '@/components/Button'
import { AccountInfo } from '@/components/wallets/AccountInfo'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const ImportWallet = () => {
	const [wallet, setWallet] = useState<Web3Account | null>(null)
	const [balance, setBalance] = useState<string>('0')
	const [network, setNetwork] = useState<string>('')
	const [networkId, setNetworkId] = useState<bigint>(BigInt(0))
	const [privateKey, setPrivateKey] = useState<string>('') // 🔹 Added state for input

	const getAccountByPrivateKey = async (privateKey: string) => {
		try {
			const account = web3.eth.accounts.privateKeyToAccount(privateKey)
			setWallet(account)
			setPrivateKey('') // 🔹 Clear input after import
			return account
		} catch (error) {
			toast.error('Invalid private key!')
			console.error('Error importing wallet:', error)
		}
	}

/*************  ✨ Codeium Command ⭐  *************/
	/**
	 * Fetches the balance of the current wallet and updates the state.
	 */
/******  f3543119-e1d1-4421-9514-fef1b7e5248d  *******/
	const fetchBalance = async () => {
		if (!wallet) return
		try {
			const balanceWei = await web3.eth.getBalance(wallet.address)
			setBalance(web3.utils.fromWei(balanceWei, 'ether'))
		} catch (error) {
			console.error('Error fetching balance:', error)
		}
	}

	const fetchNetwork = async () => {
		try {
			const networkId = await web3.eth.net.getId()
			setNetworkId(networkId)
			let networkName = 'Unknown Network'

			switch (networkId) {
				case BigInt(1):
					networkName = 'Ethereum Mainnet'
					break
				case BigInt(137):
					networkName = 'Polygon Mainnet'
					break
				case BigInt(80002):
					networkName = 'Polygon Amoy Testnet'
					break
				case BigInt(1001):
					networkName = 'Kaia Kairos Testnet'
					break
				default:
					networkName = `Unknown (${networkId})`
			}

			setNetwork(networkName)
		} catch (error) {
			console.error('Error fetching network:', error)
		}
	}

	useEffect(() => {
		if (wallet) {
			fetchBalance()
			fetchNetwork()
		}
	}, [wallet])

	return (
		<div className='flex w-full flex-col items-center gap-8'>
			{!wallet ? (
				<div className='flex gap-4'>
					<input
						type='text'
						placeholder='Enter Private Key'
						value={privateKey}
						onChange={e => setPrivateKey(e.target.value)}
						className='w-[300px] rounded-lg border border-gray-400 p-2'
					/>
					<Button
						onClick={() => privateKey && getAccountByPrivateKey(privateKey)}
						disabled={!privateKey.trim()}
						width='w-[200px] flex flex-row gap-2 items-center'>
						<IoWalletOutline /> Import Wallet
					</Button>
				</div>
			) : (
				<>
					<AccountInfo
						network={network}
						wallet={wallet}
						balance={balance}
						networkId={networkId}
						fetchBalance={fetchBalance}
					/>
				</>
			)}
		</div>
	)
}
