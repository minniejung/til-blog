import React, { useEffect } from 'react'

import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import Web3 from 'web3'
import { RegisteredSubscription } from 'web3/lib/commonjs/eth.exports'

import { balanceAtom, networkAtom, web3WalletAtom } from '@/stores/atoms'

import { AccountInfo } from './AccountInfo'
import { Faucet } from './Faucet'
import { SendTxForm } from './SendTxForm'
import { TxHashes } from './TxHashes'

type WalletContentsType = {
	web3: Web3<RegisteredSubscription>
}

export const WalletContents = ({ web3 }: WalletContentsType) => {
	const wallet = useAtomValue(web3WalletAtom)

	const setBalance = useSetAtom(balanceAtom)
	const [network, setNetwork] = useAtom(networkAtom)

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

			setNetwork({ id: BigInt(networkId), name: networkName })
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
		wallet && (
			<>
				<AccountInfo network={network} wallet={wallet} fetchBalance={fetchBalance} />
				<Faucet web3={web3} fetchBalance={fetchBalance} />
				<SendTxForm web3={web3} fetchBalance={fetchBalance} />
				<TxHashes />
			</>
		)
	)
}
