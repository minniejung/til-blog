'use client'

import React from 'react'

import { useSetAtom } from 'jotai'
import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import Button from '@/components/buttons/Button'
import { balanceAtom, networkAtom, web3WalletAtom } from '@/stores/atoms'
import { defaultNetwork } from '@/utils/consts'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const ButtonCreateWallet = () => {
	const setWallet = useSetAtom(web3WalletAtom)
	const setBalance = useSetAtom(balanceAtom)
	const setNetwork = useSetAtom(networkAtom)

	const createAweb3Wallet = () => {
		const newWallet = web3.eth.accounts.create()

		setWallet(newWallet)
		setBalance('0')
		setNetwork(defaultNetwork)

		toast.success('New wallet created!')
	}

	return (
		<Button
			onClick={createAweb3Wallet}
			className='flex w-full flex-row items-center gap-2 hover:border-purple-300 hover:bg-purple-50'>
			<IoWalletOutline /> Create A New Wallet
		</Button>
	)
}
