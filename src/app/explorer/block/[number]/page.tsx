'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

import { LuBlocks } from 'react-icons/lu'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { BlockData } from '@/features/explorer/BlockData'

const BlockDetailPage = () => {
	const router = useRouter()
	const { number: blockNumber } = useParams()

	return (
		<div className='space-y-8'>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>

			<div className='mb-10 flex flex-row items-center gap-4 text-2xl font-bold text-gray-600'>
				<LuBlocks className='font-medium' />
				Block Detail Page #{blockNumber}
			</div>

			<BlockData blockNumber={Number(blockNumber)} />
		</div>
	)
}

export default BlockDetailPage
