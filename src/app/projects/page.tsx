'use client'

import { CategoryCard } from '@/components/CategoryCard'

const ProjectPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>Projects (WIP)</p>

			<div className='grid gap-4 xs:grid-cols-2'>
				<CategoryCard title='Meta Transaction' newPage path='https://attendance-meow.vercel.app/home' />
				<CategoryCard title='Mint Page' newPage path='https://mint-scob.vercel.app/mint' />
				<CategoryCard title='Explorer' path='explorer' />
				<CategoryCard title='Wallet' path='wallet' />
			</div>
		</>
	)
}

export default ProjectPage
