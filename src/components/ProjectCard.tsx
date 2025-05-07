'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ProjectCardProps = {
	title: string
	path: string
	newPage?: boolean
	img: StaticImageData
	description: string
	tags?: string
}

export const ProjectCard = ({ title, path, newPage = false, description, img, tags }: ProjectCardProps) => {
	const router = useRouter()

	if (newPage) {
		return (
			<Link
				href={path}
				target='_blank'
				rel='noopener noreferrer'
				className='flex h-fit w-full flex-col items-center justify-center rounded-lg border'>
				<div className='flex w-full flex-col justify-center gap-2 border-b bg-purple-100 p-4 text-center'>
					<div className='text-2xl font-bold'>{title}</div>
					<div className='px-4 text-sm font-medium opacity-70'>{description}</div>
					<div className='font-semibold italic opacity-70'>{tags}</div>
				</div>
				<Image src={img} width={800} height={300} alt='project' className='object-cover p-4' />
			</Link>
		)
	}

	return (
		<div
			onClick={() => router.push(`/${path}`)}
			className='flex h-fit w-full flex-col items-center justify-center rounded-lg border'>
			<div className='flex w-full flex-col justify-center gap-2 border-b bg-purple-100 p-4 text-center'>
				<div className='text-2xl font-bold'>{title}</div>
				<div className='px-4 text-sm font-medium opacity-70'>{description}</div>
				<div className='font-semibold italic opacity-70'>{tags}</div>
			</div>
			<Image src={img} width={800} height={300} alt='project' className='object-cover p-4' />
		</div>
	)
}
