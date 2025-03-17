'use client'

import React, { useEffect, useState } from 'react'

import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3, { Web3Account } from 'web3'

import Button from '@/components/Button'
import { AccountInfo } from '@/components/wallets/AccountInfo'
import { Faucet } from '@/components/wallets/Faucet'
import { SendTxForm } from '@/components/wallets/SendTxForm'
import { TxHashes } from '@/components/wallets/TxHashes'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const CreateWallet = () => {
	const [wallet, setWallet] = useState<Web3Account | null>(null)
	const [balance, setBalance] = useState<string>('0')
	const [network, setNetwork] = useState<string>('')
	const [networkId, setNetworkId] = useState<bigint>(BigInt(0))

	const createAweb3Wallet = () => {
		const newWallet = web3.eth.accounts.create()
		setWallet(newWallet)
		setBalance('0')
		setNetwork('')
		toast.success('New wallet created!')
	}

	const fetchBalance = async () => {
		if (!wallet) return
		try {
			const balanceWei = await web3.eth.getBalance(wallet.address)
			// const balanceWei = await web3.eth.getBalance('0xfcA1C3A52C77e89f0A2A8AC635AfCAEc3F76e5EE')
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
				<div className='flex gap-8'>
					<Button onClick={createAweb3Wallet} width='w-[200px] flex flex-row gap-2 items-center'>
						<IoWalletOutline /> Create Wallet
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

					<Faucet web3={web3} wallet={wallet} fetchBalance={fetchBalance} />

					<SendTxForm web3={web3} wallet={wallet} balance={balance} fetchBalance={fetchBalance} />

					<TxHashes />
				</>
			)}
		</div>
	)
}
