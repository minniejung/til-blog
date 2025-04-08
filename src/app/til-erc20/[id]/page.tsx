'use client'

import { useParams, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { dataERC20 } from '@/utils/dataTIL/dataERC20'

const TilERC20SinglePage = () => {
	const router = useRouter()
	const param = useParams()

	const foundData = useMemo(() => {
		return dataERC20.find(item => item.id === Number(param.id)) ?? undefined
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

export default TilERC20SinglePage
