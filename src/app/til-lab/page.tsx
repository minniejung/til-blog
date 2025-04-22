import TilCard from '@/components/TilCard'
import { dataLab } from '@/utils/dataTIL/dataLab'
import { TilCardType } from '@/utils/types/types'

const TilLabPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Lab</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataLab.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilLabPage
