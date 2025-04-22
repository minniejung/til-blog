import TilCard from '@/components/TilCard'
import { dataBlockchain } from '@/utils/dataTIL/dataBlockchain'
import { TilCardType } from '@/utils/types/types'

const TilBlockchainPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>TIL - Blockchain</p>
			<div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
				{dataBlockchain.map((data: TilCardType) => <TilCard key={data.id} data={data} />).reverse()}
			</div>
		</>
	)
}

export default TilBlockchainPage
