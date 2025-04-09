'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useMemo } from 'react'

import ButtonChangeContent from '@/components/buttons/ButtonChangeContent'
import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { dataERC20 } from '@/utils/dataTIL/dataERC20'

const TilERC20SinglePage = () => {
	const router = useRouter()
	const param = useParams()
	const pathname = usePathname()
	const base = pathname.split('/')[1]

	const foundData = useMemo(() => {
		return dataERC20.find(item => item.id === Number(param.id)) ?? undefined
	}, [param])

	return (
		<div className='pt-2'>
			<div className='mb-8 flex w-full flex-row items-center justify-between'>
				<ButtonGoBack onClick={() => router.push(`/${base}`)}>Prev Page</ButtonGoBack>
				<ButtonChangeContent data={dataERC20} />
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

export default TilERC20SinglePage
