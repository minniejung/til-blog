import { useCallback, useState } from 'react'

import { Tnft } from '@/utils/types/nft.types'
import { MetaMaskAccount } from '@/utils/types/wallet.types'

import { getNfts } from './web3'

export const useNfts = (wallet: MetaMaskAccount | null) => {
	const [loading, setLoading] = useState(false)
	const [nfts, setNfts] = useState<Tnft[]>([])

	const refetch = useCallback(async () => {
		if (!wallet) return
		setLoading(true)
		try {
			const res = await getNfts(wallet.address)
			setNfts(res)
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(false)
		}
	}, [wallet])

	return { loading, nfts, refetch }
}
