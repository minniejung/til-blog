'use client'

import { CategoryCard } from '@/components/CategoryCard'

const TilPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>Today I learnt</p>

			<div className='grid gap-4 xs:grid-cols-2'>
				<CategoryCard title='TIL-Blockchain' path='til/blockchain' />
				<CategoryCard title='TIL-Solidity' path='til/solidity' />
				<CategoryCard title='TIL-ERC' path='til/erc' />
				<CategoryCard title='TIL-Defi' path='til/defi' />
				<CategoryCard title='TIL-Lab' path='til/lab' />
				<CategoryCard title='TIL-Front' path='til/front' />
				<CategoryCard title='TIL-Back' path='til/back' />
			</div>
		</>
	)
}

export default TilPage
