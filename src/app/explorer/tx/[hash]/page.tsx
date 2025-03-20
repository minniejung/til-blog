'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { LuBlocks } from 'react-icons/lu'
import { TiWarningOutline } from 'react-icons/ti'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { Tabs } from '@/components/Tabs'
import useTxData from '@/features/explorer/hooks/useTxData'
import { TxData } from '@/features/explorer/TxData'
import { TxDecodedInput } from '@/features/explorer/TxDecodedInput'
import { TxReceiptData } from '@/features/explorer/TxReceiptData'
import { cn } from '@/utils/helpers/cn'

const TxTabs = [
	{ id: 'receipt', label: 'Transaction Receipt' },
	{ id: 'data', label: 'Transaction Data' },
	{ id: 'decoded', label: 'Decoded Input' },
]

const TxDetailPage = () => {
	const router = useRouter()
	const { hash } = useParams<{ hash: string }>()

	const [activeTab, setActiveTab] = useState('receipt')

	const { error, status, failureReason } = useTxData(hash)

	const isStatusSuccess = status === 'success'

	console.log('failureReason', failureReason)

	return (
		<div className='space-y-8'>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>

			<div>
				<div className='flex flex-row items-center gap-4 text-2xl font-bold text-gray-600'>
					<LuBlocks className='font-medium' />
					Transaction Detail Page
					<div
						className={cn(
							'flex flex-row items-center gap-1 rounded-2xl border px-4 py-1 text-xs uppercase',
							isStatusSuccess ? 'border-green-600 text-green-600' : 'border-red-600 text-red-600',
						)}>
						{isStatusSuccess ? (
							<>
								<FaCheck />
								Success
							</>
						) : (
							<>
								<FaXmark />
								Failed
							</>
						)}
					</div>
				</div>
				<p className='p-2 pl-10 text-lg font-bold text-gray-600'>{hash}</p>

				{!isStatusSuccess && (
					<div className='mb-10 flex flex-row items-center gap-1 pl-10 text-sm font-semibold text-red-600'>
						<TiWarningOutline className='text-lg' />
						{failureReason}
					</div>
				)}
			</div>

			{error && <div>Error: {error}</div>}

			<Tabs tabs={TxTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

			{activeTab === 'receipt' && <TxReceiptData hash={hash} />}
			{activeTab === 'data' && <TxData hash={hash} />}
			{activeTab === 'decoded' && isStatusSuccess && <TxDecodedInput hash={hash} />}
		</div>
	)
}

export default TxDetailPage
