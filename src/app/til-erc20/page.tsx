import TilCard from '@/components/TilCard'
import { dataERC20 } from '@/utils/dataTIL/dataERC20'
import { TilCardType } from '@/utils/types'

const TilERC20Page = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - ERC20</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataERC20.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilERC20Page
