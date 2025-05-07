'use client'

import { CategoryCard } from '@/components/CategoryCard'
import { dataBack } from '@/utils/dataTIL/dataBack'
import { dataBlockchain } from '@/utils/dataTIL/dataBlockchain'
import { dataDefi } from '@/utils/dataTIL/dataDefi'
import { dataERC } from '@/utils/dataTIL/dataERC'
import { dataFront } from '@/utils/dataTIL/dataFront'
import { dataLab } from '@/utils/dataTIL/dataLab'
import { dataSolidity } from '@/utils/dataTIL/dataSolidity'

const TilPage = () => {
	const uniqueTagsBlockchain = [...new Set(dataBlockchain.flatMap(item => item.tags))]
	const uniqueTagsSolidity = [...new Set(dataSolidity.flatMap(item => item.tags))]
	const uniqueTagsERC = [...new Set(dataERC.flatMap(item => item.tags))]
	const uniqueTagsDefi = [...new Set(dataDefi.flatMap(item => item.tags))]
	const uniqueTagsLab = [...new Set(dataLab.flatMap(item => item.tags))]
	const uniqueTagsFront = [...new Set(dataFront.flatMap(item => item.tags))]
	const uniqueTagsBack = [...new Set(dataBack.flatMap(item => item.tags))]

	return (
		<>
			<p className='mb-8 text-2xl font-bold'>Today I learnt (WIP)</p>

			<div className='grid gap-4'>
				<CategoryCard title='TIL-Blockchain' path='til/blockchain' tags={uniqueTagsBlockchain} />
				<CategoryCard title='TIL-Solidity' path='til/solidity' tags={uniqueTagsSolidity} />
				<CategoryCard title='TIL-ERC' path='til/erc' tags={uniqueTagsERC} />
				<CategoryCard title='TIL-Defi' path='til/defi' tags={uniqueTagsDefi} />
				<CategoryCard title='TIL-Lab' path='til/lab' tags={uniqueTagsLab} />
				<CategoryCard title='TIL-Front' path='til/front' tags={uniqueTagsFront} />
				<CategoryCard title='TIL-Back' path='til/back' tags={uniqueTagsBack} />
			</div>
		</>
	)
}

export default TilPage
