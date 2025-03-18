'use client'

import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { dataBack } from '@/utils/dataTIL/dataBack'

const TilBackSinglePage = () => {
	const router = useRouter()
	const param = useParams()

	const foundData = useMemo(() => {
		return dataBack.find(item => item.id === Number(param.id)) ?? undefined
	}, [param])

	return (
		<div className='pt-2'>
			<ButtonGoBack onClick={() => router.back()}>Prev Page</ButtonGoBack>

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

export default TilBackSinglePage
