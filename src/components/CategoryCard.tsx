'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

type CategoryCardProps = {
	title: string
	path: string
	newPage?: boolean
}

export const CategoryCard = ({ title, path, newPage = false }: CategoryCardProps) => {
	const router = useRouter()

	if (newPage) {
		return (
			<Link href={path} target='_blank' rel='noopener noreferrer'>
				<div className='flex h-[200px] items-center justify-center rounded-lg border bg-gray-100 font-bold'>
					{title}
				</div>
			</Link>
		)
	}

	return (
		<div
			onClick={() => router.push(`/${path}`)}
			className='flex h-[200px] cursor-pointer items-center justify-center rounded-lg border bg-gray-100 font-bold'>
			{title}
		</div>
	)
}
