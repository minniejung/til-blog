'use client'

import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { HiArrowLeft } from 'react-icons/hi'

import { dataBlockchain } from '@/utils/dataTIL/dataBlockchain'

const TilBlockchainSinglePage = () => {
	const router = useRouter()
	const param = useParams()

	const foundData = useMemo(() => {
		return dataBlockchain.find(item => item.id === Number(param.id)) ?? undefined
	}, [param])

	return (
		<div className='pt-2'>
			<div
				onClick={() => router.back()}
				className='mb-16 flex cursor-pointer flex-row items-center gap-2 text-[#5e5e5e]'>
				<HiArrowLeft className='fill-[#5e5e5e]' />
				<span>Prev page</span>
			</div>
			<div className='tilPageWrapper'>
				{foundData ? foundData.content : <div className='w-screen'>No data found</div>}
			</div>
		</div>
	)
}

export default TilBlockchainSinglePage
