import { useParams, usePathname, useRouter } from 'next/navigation'
import React from 'react'

import { FcNext } from 'react-icons/fc'

import { cn } from '@/utils/helpers/cn'
import { TilCardType } from '@/utils/types'

type Props = {
	data: TilCardType[]
}

const ButtonChangeContent = ({ data }: Props) => {
	const router = useRouter()

	const params = useParams()
	const contentId = Number(params.id)

	const pathname = usePathname()
	const basePath = pathname.split('/')[1]

	const handlePrev = () => {
		if (contentId !== 0) router.push(`/${basePath}/${contentId - 1}`)
	}

	const handleNext = () => {
		if (contentId !== data.length - 1) router.push(`/${basePath}/${contentId + 1}`)
	}

	return (
		<div className='flex gap-6'>
			<div
				onClick={handlePrev}
				className={cn('cursor-pointer rounded-full border p-2', contentId === 0 && 'cursor-not-allowed opacity-50')}>
				<FcNext className='rotate-180' />
			</div>
			<div
				onClick={handleNext}
				className={cn(
					'cursor-pointer rounded-full border p-2',
					contentId === data.length - 1 && 'cursor-not-allowed opacity-50',
				)}>
				<FcNext className='text-purple-500' />
			</div>
		</div>
	)
}

export default ButtonChangeContent
