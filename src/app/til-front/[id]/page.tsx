'use client'

import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { HiArrowLeft } from 'react-icons/hi'

import { dataFront } from '@/utils/dataTIL/dataFront'

const TilFrontSinglePage = () => {
	const router = useRouter()
	const param = useParams()

	const foundData = useMemo(() => {
		return dataFront.find(item => item.id === Number(param.id)) ?? undefined
	}, [param])

	return (
		<div className='pt-2'>
			<div
				onClick={() => router.back()}
				className='mb-8 flex cursor-pointer flex-row items-center gap-2 text-[#5e5e5e]'>
				<HiArrowLeft className='fill-[#5e5e5e]' />
				<span>Prev page</span>
			</div>

			{foundData ? (
				<div className='tilPageWrapper space-y-8'>
					<div className='text-3xl font-bold'>{foundData.title}</div>
					<hr />
					<div>{foundData.content}</div>
				</div>
			) : (
				<div>No data found</div>
			)}
		</div>
	)
}

export default TilFrontSinglePage
