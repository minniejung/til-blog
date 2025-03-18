import React, { useEffect, useState } from 'react'

import { useAtomValue } from 'jotai'
import { FaCopy } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi'
import { PiShareNetwork } from 'react-icons/pi'
import Web3, { Web3Account } from 'web3'

import { balanceAtom, networkAtom } from '@/stores/atoms'
import { copyToClipboard } from '@/utils/helpers/copyToClipboard'

import { Modal } from '../Modal'
import { ModalNetwork } from '../ModalNetwork'

type AccountInfoType = { web3: Web3; wallet: Web3Account; fetchBalance: () => void }

export const AccountInfo = ({ web3, wallet, fetchBalance }: AccountInfoType) => {
	const balance = useAtomValue(balanceAtom)
	const network = useAtomValue(networkAtom)

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	console.log('network', network)

	useEffect(() => {
		setIsModalOpen(false)
	}, [network])

	return (
		<div className='flex w-[500px] flex-col space-y-2 rounded-lg border border-gray-300 p-4'>
			<div className='flex pb-2 font-bold text-gray-600'>
				{network ? (
					<span className='flex flex-row items-center gap-2'>
						<PiShareNetwork className='text-2xl' />
						{network.name}
						<HiRefresh onClick={() => setIsModalOpen(true)} className='cursor-pointer text-purple-400' />
					</span>
				) : (
					<span>Network data fetching...</span>
				)}
			</div>

			<hr className='pb-2' />

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ModalNetwork web3={web3} />
			</Modal>

			<div className='ml-8 flex flex-row items-center gap-2'>
				<span className='mr-2 w-fit font-bold'>Address : </span>{' '}
				{wallet.address.slice(0, 25) + '...' + wallet.address.slice(-3)}
				<span onClick={() => copyToClipboard(wallet.address)}>
					<FaCopy className='cursor-pointer text-purple-400' />
				</span>
			</div>

			<div className='ml-8 flex flex-row items-center gap-2'>
				<span className='mr-2 w-fit font-bold'>Balance : </span>{' '}
				{balance !== null ? (
					<span>
						{balance} {network.currency}
					</span>
				) : (
					<span>Balance data fetching...</span>
				)}
				<button onClick={fetchBalance}>
					<HiRefresh className='cursor-pointer text-purple-400' />
				</button>
			</div>

			{/* <strong>프라이빗 키:</strong> {wallet.privateKey} */}
		</div>
	)
}
