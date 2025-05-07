'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Tag from './Tag'

type CategoryCardProps = {
	title: string
	path: string
	tags?: string[]
}

export const CategoryCard = ({ title, path, tags }: CategoryCardProps) => {
	const router = useRouter()

	const [showMore, setShowMore] = useState<boolean>(false)

	return (
		<div className='rounded-lg border p-4 hover:border-purple-300'>
			<div
				onClick={() => router.push(`/${path}`)}
				className='flex h-fit w-full cursor-pointer flex-col items-center justify-center gap-2'>
				<div className='text-2xl font-bold'>{title}</div>
				<div className='space-y-4 p-4 text-xs'>
					<div className='flex flex-row flex-wrap justify-center gap-2 whitespace-nowrap italic opacity-70'>
						{!showMore
							? tags?.slice(0, 15).map((t: string, i: number) => (
									<div key={i}>
										<Tag text={t} />
									</div>
								))
							: tags?.map((t: string, i: number) => (
									<div key={i}>
										<Tag text={t} />
									</div>
								))}
					</div>
				</div>
			</div>

			{tags && tags.length >= 15 && (
				<div
					className='font-sm flex cursor-pointer justify-end p-2 pr-4 text-blue-500 underline'
					onClick={() => setShowMore(prev => !prev)}>
					{showMore ? 'Show less...' : 'Show more...'}
				</div>
			)}
		</div>
	)
}
