import { atom } from 'jotai'
import { Web3Account } from 'web3'

import { defaultNetwork } from '@/utils/consts'
import { NetworkType } from '@/utils/types'

export const web3WalletAtom = atom<Web3Account | null>(null)
export const balanceAtom = atom<string>('0')
export const networkAtom = atom<NetworkType>(defaultNetwork)
export const txHashesAtom = atom<string[]>([])
