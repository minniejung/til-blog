'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

import { FaXmark } from 'react-icons/fa6'
import { TbContract } from 'react-icons/tb'
import { TiWarningOutline } from 'react-icons/ti'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { ContractData } from '@/features/explorer/ContractData'
import { EoaData } from '@/features/explorer/EoaData'
import useContractChecker from '@/features/explorer/hooks/useContractChecker'
import useUserTxHistory from '@/features/explorer/hooks/useUserTxHistory'
import { cn } from '@/utils/helpers/cn'

const ContractDetailPage = () => {
	const router = useRouter()
	const { address } = useParams<{ address: string }>()

	const { isContract, error } = useContractChecker(address)
	const { transactions, error: historyError } = useUserTxHistory(address)

	return (
		<div>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>

			<div className='flex flex-row items-center gap-4 text-2xl font-bold text-gray-600'>
				<TbContract className='font-medium' />
				Contract Detail Page ({isContract ? 'CA' : 'EOA'})
				<div
					className={cn(
						'flex flex-row items-center gap-1 rounded-2xl border border-red-600 px-4 py-1 text-xs uppercase text-red-600',
					)}>
					<FaXmark />
					Failed
				</div>
			</div>

			<p className='p-2 pl-10 text-xl font-bold text-gray-600'>{address}</p>

			{(error || historyError) && (
				<div className='mb-10 flex flex-row items-center gap-1 pl-10 text-sm font-semibold text-red-600'>
					<TiWarningOutline className='text-lg' />
					{isContract ? error : historyError}
				</div>
			)}

			{isContract ? (
				!error && <ContractData address={address} />
			) : (
				<div className='mt-10 space-y-2'>
					<p className='pl-4 text-lg font-bold text-gray-600'>Recent Transactions</p>
					{historyError && <p className='text-red-500'>{historyError}</p>}

					{!historyError && transactions.length > 0 && <EoaData address={address} />}
				</div>
			)}
		</div>
	)
}

export default ContractDetailPage
