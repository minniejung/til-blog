import TilCard from '@/components/TilCard'
import { dataDefi } from '@/utils/dataTIL/dataDefi'
import { TilCardType } from '@/utils/types/types'

const TilDefiPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Defi</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataDefi.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilDefiPage
