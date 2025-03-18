import { atom } from 'jotai'
import { Web3Account } from 'web3'

import { NetworkType } from '@/utils/types'

export const web3WalletAtom = atom<Web3Account | null>(null)
export const balanceAtom = atom<string>('0')
export const networkAtom = atom<NetworkType>({
	id: 1001,
	name: 'Kaia Kairos Testnet',
	currency: 'KAIA',
	rpcUrl: 'https://public-en-kairos.node.kaia.io',
})
export const txHashesAtom = atom<string[]>([])
