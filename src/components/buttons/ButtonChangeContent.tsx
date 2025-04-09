import { useParams, usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { FcNext } from 'react-icons/fc'

import { TilCardType } from '@/utils/types'

type Props = {
	data: TilCardType[]
}

const ButtonChangeContent = ({ data }: Props) => {
	const params = useParams()
	const router = useRouter()
	const pathname = usePathname()
	const basePath = pathname.split('/')[1]

	const [index, setIndex] = useState<number | null>(null)

	useEffect(() => {
		if (params?.id) {
			const currentId = parseInt(params.id as string)
			setIndex(isNaN(currentId) ? 0 : currentId)
		}
	}, [params])

	if (index === null) return null

	const handleNext = () => {
		const nextIndex = (index + 1) % data.length
		setIndex(nextIndex)

		router.push(`/${basePath}/${nextIndex}`)
	}

	const handlePrev = () => {
		const prevIndex = (index - 1 + data.length) % data.length
		setIndex(prevIndex)

		router.push(`/${basePath}/${prevIndex}`)
	}

	return (
		<div className='flex gap-6'>
			<div className='cursor-pointer rounded-full border p-2 text-purple-600'>
				<FcNext onClick={handlePrev} className='rotate-180' />
			</div>
			<div className='cursor-pointer rounded-full border p-2'>
				<FcNext onClick={handleNext} className='cursor-pointer text-purple-500' />
			</div>
		</div>
	)
}

export default ButtonChangeContent
