import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { BlockDataType } from '@/utils/types/types'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

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
				const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
				await delay(2000)
				setLoading(false)
			}
		}

		if (blockNumber) fetchBlock()
	}, [blockNumber])

	return { block, loading, error }
}

export default useBlockData
