import React, { useEffect } from 'react'

import { useAtomValue, useSetAtom } from 'jotai'
import Web3 from 'web3'

import { balanceAtom, networkAtom, web3WalletAtom } from '@/stores/atoms'

import { AccountInfo } from './AccountInfo'
import { Faucet } from './Faucet'
import { SendTxForm } from './SendTxForm'
import { TxHashes } from './TxHashes'

export const WalletContents = () => {
	const wallet = useAtomValue(web3WalletAtom)
	const network = useAtomValue(networkAtom)

	const web3 = new Web3(network.rpcUrl)

	const setBalance = useSetAtom(balanceAtom)

	const fetchBalance = async () => {
		if (!wallet) return
		try {
			const balanceWei = await web3.eth.getBalance(wallet.address)
			setBalance(web3.utils.fromWei(balanceWei, 'ether'))
		} catch (error) {
			console.error('Error fetching balance:', error)
		}
	}

	useEffect(() => {
		if (wallet) {
			fetchBalance()
		}
	}, [wallet, network])

	return (
		wallet && (
			<>
				<AccountInfo web3={web3} wallet={wallet} fetchBalance={fetchBalance} />
				{network.currency === 'KAIA' && <Faucet web3={web3} fetchBalance={fetchBalance} />}
				<SendTxForm web3={web3} fetchBalance={fetchBalance} />
				<TxHashes />
			</>
		)
	)
}
