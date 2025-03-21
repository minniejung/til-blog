'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

import { FaSpinner } from 'react-icons/fa'
import { TbContract } from 'react-icons/tb'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { ContractData } from '@/features/explorer/ContractData'
import { EoaData } from '@/features/explorer/EoaData'
import useContractChecker from '@/features/explorer/hooks/useContractChecker'

const ContractDetailPage = () => {
	const router = useRouter()
	const { address } = useParams<{ address: string }>()

	const { isContract, loading } = useContractChecker(address)

	return (
		<div>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>

			<div className='flex flex-row items-center gap-4 text-2xl font-bold text-gray-600'>
				<TbContract className='font-medium' />
				Contract Detail Page
				{loading ? <FaSpinner className='animate-spin text-xl text-gray-500' /> : isContract ? ' (CA)' : ' (EOA)'}
			</div>

			<p className='mb-10 p-2 pl-10 text-xl font-bold text-gray-600'>{address}</p>

			{isContract ? <ContractData address={address} /> : <EoaData address={address} />}
		</div>
	)
}

export default ContractDetailPage
