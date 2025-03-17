import React, { useEffect } from 'react'

import { FaCopy } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi'
import { Web3Account } from 'web3'

import { copyToClipboard } from '@/utils/helpers/copyToClipboard'

type AccountInfoType = {
	network: string
	wallet: Web3Account
	balance: string
	networkId: bigint
	fetchBalance: () => void
}

export const AccountInfo = ({ network, wallet, balance, networkId, fetchBalance }: AccountInfoType) => {
	useEffect(() => {
		if (wallet) {
			fetchBalance()
		}
	}, [balance])

	return (
		<div className='flex w-[500px] flex-col space-y-2 rounded-lg border border-gray-300 p-4'>
			<div className='mb-2 flex flex-row gap-2'>
				{network ? <span className='font-bold'>{network} </span> : <span>Network data fetching...</span>}
			</div>
			<div className='flex flex-row items-center gap-2'>
				<span className='mr-2 w-fit font-bold'>Address : </span>{' '}
				{wallet.address.slice(0, 25) + '...' + wallet.address.slice(-3)}
				<span onClick={() => copyToClipboard(wallet.address)}>
					<FaCopy className='cursor-pointer text-orange-400' />
				</span>
			</div>
			<div className='flex flex-row items-center gap-2'>
				<span className='mr-2 w-fit font-bold'>Balance : </span>{' '}
				{balance !== null ? (
					<span>
						{balance} {networkId === BigInt(80001) ? 'MATIC' : networkId === BigInt(1001) ? 'KAIA' : 'Unknown'}
					</span>
				) : (
					<span>Balance data fetching...</span>
				)}
				<button onClick={fetchBalance}>
					<HiRefresh className='cursor-pointer text-orange-400' />
				</button>
			</div>
			{/* <strong>프라이빗 키:</strong> {wallet.privateKey} */}
		</div>
	)
}
