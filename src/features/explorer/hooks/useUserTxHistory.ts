import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { TxDataType } from '@/utils/types'

const web3 = new Web3('https://polygon-rpc.com')

const useUserTxHistory = (address: string, maxBlocks: number = 10, maxTxs: number = 10) => {
	const [transactions, setTransactions] = useState<TxDataType[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!web3.utils.isAddress(address)) {
			setError('Invalid Ethereum address')
			setLoading(false)
			return
		}

		const fetchTransactions = async () => {
			try {
				setLoading(true)
				const latestBlock = Number(await web3.eth.getBlockNumber())
				const startBlock = Math.max(latestBlock - maxBlocks, 0)

				console.log(`Scanning transactions for ${address} from block ${latestBlock} down to ${startBlock}...`)

				const txs: TxDataType[] = []

				for (let i = latestBlock; i >= startBlock && txs.length < maxTxs; i--) {
					const block = await web3.eth.getBlock(i, true)

					if (block && block.transactions) {
						for (const tx of block.transactions) {
							if (
								(tx.from.toLowerCase() === address.toLowerCase() || tx.to?.toLowerCase() === address.toLowerCase()) &&
								txs.length < maxTxs
							) {
								// Fetch block details for timestamp
								const txBlock = await web3.eth.getBlock(tx.blockNumber)
								tx.timestamp = txBlock.timestamp // Attach timestamp to the transaction
								txs.push(tx)
							}
						}
					}

					if (txs.length >= maxTxs) break
				}

				console.log(`Found ${txs.length} transactions for ${address}`)
				setTransactions(txs)
			} catch (err) {
				setError('Error fetching transactions')
				console.error(err)
			} finally {
				setLoading(false)
			}
		}

		fetchTransactions()
	}, [address])

	return { transactions, loading, error }
}

export default useUserTxHistory
