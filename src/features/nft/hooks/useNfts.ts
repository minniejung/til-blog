import { useCallback, useState } from 'react'

import { Taccount, Tnft } from '@/utils/types/nft.types'
import { MetaMaskAccountType } from '@/utils/types/wallet.types'

import { getNfts } from './web3'

export const useNfts = (wallet: MetaMaskAccountType | Taccount | null) => {
	const [loading, setLoading] = useState<boolean>(false)
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
