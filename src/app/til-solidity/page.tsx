import TilCard from '@/components/TilCard'
import { dataSolidity } from '@/utils/dataTIL/dataSolidity'
import { TilCardType } from '@/utils/types'

const TilSolidityPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Solidity</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataSolidity.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilSolidityPage
