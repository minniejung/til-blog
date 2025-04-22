import TilCard from '@/components/TilCard'
import { dataERC } from '@/utils/dataTIL/dataERC'
import { TilCardType } from '@/utils/types/types'

const TilERC20Page = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - ERC</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataERC.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilERC20Page
