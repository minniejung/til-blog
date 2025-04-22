'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { useQuery } from '@tanstack/react-query'

import { getRandomCats } from '@/utils/api/getRandomCat'
import { TilCardType } from '@/utils/types/types'

import Tag from './Tag'

const TilCard = ({ data }: { data: TilCardType }) => {
	const router = useRouter()
	const path = usePathname()

	const {
		data: catData,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['randomCats'],
		queryFn: getRandomCats,
		staleTime: 1000 * 60 * 60 * 10, // 10h
	})

	const randomCat = catData ? catData[Math.floor(Math.random() * catData.length)] : null

	return (
		<li
			onClick={() => {
				router.push(`${path}/${data.id.toString()}`)
			}}
			className='flex cursor-pointer flex-col space-y-2 rounded-lg border border-gray-300 p-2 hover:bg-gray-100'>
			<div className='relative flex h-[200px] w-full'>
				{isLoading ? (
					<div className='flex h-full w-full items-center justify-center rounded-lg text-xs'>Loading...</div>
				) : isError ? (
					<div className='flex h-full w-full items-center justify-center rounded-lg text-xs'>No photo</div>
				) : (
					<Image
						src={`https://cataas.com/cat/${randomCat?.id}`}
						alt='random-cat'
						width={300}
						height={300}
						className='rounded-lg object-cover'
					/>
				)}
			</div>

			<p className='text-center text-sm font-bold text-[#a9a9a9]'>{data.date}</p>
			<p className='pb-4 text-center text-sm font-bold'>{data.title}</p>

			<div className='flex flex-row flex-wrap gap-2'>
				{data.tags.map((t: string, i: number) => (
					<div key={i}>
						<Tag text={t} />
					</div>
				))}
			</div>
		</li>
	)
}
export default TilCard
