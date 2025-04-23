'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { useAtomValue } from 'jotai'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { selectedNftAtom } from '@/stores/atoms'

export const SingleNftPage = () => {
	const router = useRouter()
	const nft = useAtomValue(selectedNftAtom)

	return (
		<div className='space-y-10'>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>
			{!nft ? (
				<div>Not found</div>
			) : (
				<div className='flex flex-col gap-1 pt-2 text-sm'>
					<Image src={nft.image} alt={nft.name} width={200} height={200} className='mb-4 rounded-xl' />
					<div className='font-bold'># {nft.tokenId}</div>
					<div className='font-bold capitalize'>Name : {nft.name}</div>
					<div>Owner: {nft.owner}</div>
					<div>Contract: {nft.contract}</div>
					{/* <div>Owner: {`${nft.owner.toString().slice(0, 15)}...${nft.owner.toString().slice(-3)}`}</div>
					<div>Contract: {`${nft.contract.toString().slice(0, 15)}...${nft.contract.toString().slice(-3)}`}</div> */}
					<div>Network: {nft.network}</div>
					<div>Symbol: {nft.symbol || ''}</div>
				</div>
			)}
		</div>
	)
}

export default SingleNftPage
