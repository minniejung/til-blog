import { atom } from 'jotai'
import { Web3Account } from 'web3'

import { defaultNetwork } from '@/utils/consts'
import { Tnft } from '@/utils/types/nft.types'
import { NetworkType } from '@/utils/types/types'
import { MetaMaskAccountType } from '@/utils/types/wallet.types'

export const web3WalletAtom = atom<Web3Account | null>(null)
export const balanceAtom = atom<string>('0')
export const networkAtom = atom<NetworkType>(defaultNetwork)
export const txHashesAtom = atom<string[]>([])

export const ethersWalletAtom = atom<MetaMaskAccountType | null>(null)

export const selectedNftAtom = atom<Tnft | null>(null)
