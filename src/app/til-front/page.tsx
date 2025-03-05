import TilCard from '@/components/TilCard'
import { dataFront } from '@/utils/dataTIL/dataFront'
import { TilCardType } from '@/utils/types'

const TilFrontPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Front</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataFront.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilFrontPage
