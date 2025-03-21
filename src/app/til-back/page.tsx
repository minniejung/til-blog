import TilCard from '@/components/TilCard'
import { dataBack } from '@/utils/dataTIL/dataBack'
import { TilCardType } from '@/utils/types'

const TilBackPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Back</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataBack.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilBackPage
