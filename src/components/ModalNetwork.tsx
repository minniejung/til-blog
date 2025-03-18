'use client'

import React from 'react'

import { useSetAtom } from 'jotai'
import { TbCoinBitcoin, TbWorldCode } from 'react-icons/tb'
import Web3 from 'web3'

import { networkAtom } from '@/stores/atoms'
import { networks } from '@/utils/consts'
import { NetworkType } from '@/utils/types'

type NetworkModalProps = {
	web3: Web3
}

export const ModalNetwork = ({ web3 }: NetworkModalProps) => {
	const setNetwork = useSetAtom(networkAtom)

	const changeNetwork = (network: NetworkType) => {
		web3.setProvider(new web3.providers.HttpProvider(network.rpcUrl))
		setNetwork(network)
	}

	return (
		<div className='relative w-full space-y-8 rounded-lg bg-white'>
			<span className='flex flex-row items-center gap-2 pr-6 font-semibold'>
				<TbWorldCode />
				Change Network
			</span>

			<ul className='w-full space-y-2'>
				{networks.map(network => (
					<li
						key={network.id}
						onClick={() => changeNetwork(network)}
						className='flex w-full cursor-pointer flex-row items-center gap-2 rounded-lg bg-gray-100 p-4 text-sm hover:bg-gray-200'>
						<TbCoinBitcoin className='text-xl' /> {network.name}
					</li>
				))}
			</ul>
		</div>
	)
}
