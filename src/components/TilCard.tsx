'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { TilCardType } from '@/utils/types'

import Tag from './Tag'

const TilCard = ({ data }: { data: TilCardType }) => {
	const router = useRouter()
	const path = usePathname()

	return (
		<li
			onClick={() => {
				router.push(`${path}/${data.id.toString()}`)
			}}
			className='flex cursor-pointer flex-col space-y-2 rounded-lg border border-gray-300 p-2 hover:bg-gray-100'>
			<div className='relative flex h-[200px] w-full'>
				<Image src='https://cataas.com/cat' alt='random-cat' fill className='rounded-lg object-cover' />
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
