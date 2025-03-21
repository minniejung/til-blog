import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { BlockDataType } from '@/utils/types'

const web3 = new Web3('https://polygon-rpc.com')

const useBlockData = (blockNumber: number) => {
	const [block, setBlock] = useState<BlockDataType | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchBlock = async () => {
			try {
				setLoading(true)
				const fetchedBlock = (await web3.eth.getBlock(blockNumber)) as BlockDataType
				setBlock(fetchedBlock)
			} catch (err) {
				setError('Failed to fetch block data' + err)
			} finally {
				setLoading(false)
			}
		}

		if (blockNumber) fetchBlock()
	}, [blockNumber])

	return { block, loading, error }
}

export default useBlockData

// const [transactions, setTransactions] = useState<any[]>([])

// const txs = await fetchRecentTransactions(address)
// setTransactions(txs)

// const fetchRecentTransactions = async (contractAddress: string) => {
// 	try {
// 		const response = await fetch(
// 			// `https://api.polygonscan.com/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${POLYGONSCAN_API_KEY}`,

// 		)
// 		const data = await response.json()
// 		if (data.status === '1') {
// 			const top5Data = data.result.slice(0, 5)
// 			console.log('top5Data', top5Data)

// 			return top5Data // Return only the 5 most recent transactions
// 		}

// 		throw new Error('No transactions found')
// 	} catch (error) {
// 		console.error('Error fetching transactions:', error)
// 		return []
// 	}
// }
