import Image from 'next/image'

import { FaSpinner } from 'react-icons/fa'

import { Tnft } from '@/utils/nft.types'

const NFTCard = ({ nft }: { nft: Tnft }) => {
	return (
		<div className='flex h-[400px] w-fit flex-col gap-4 rounded-lg border p-2'>
			<div className='relative h-[200px] w-[200px] overflow-hidden rounded-lg bg-gray-100'>
				{nft.image ? (
					<Image src={nft.image} alt={nft.name} width={200} height={200} className='h-full w-full object-cover' />
				) : (
					<FaSpinner className='animate-spin text-xl text-gray-500' />
				)}
				<div className='z-1 absolute bottom-2 right-2 rounded-lg border bg-white px-2 py-1 text-xs'>
					# {nft.tokenId}
				</div>
			</div>
			<div className='max-w-[200px] space-y-1 pl-2'>
				<div className='font-bold capitalize'>{nft.name}</div>
				<div className='whitespace-wrap text-xs text-gray-500'>
					{nft.description
						? nft.description
						: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi rem corrupti perferendis atque, consequatur soluta totam vero!'}
				</div>
				<div className='flex flex-col gap-1 pt-2 text-xs'>
					<div>Owner: {`${nft.owner.toString().slice(0, 15)}...${nft.owner.toString().slice(-3)}`}</div>
					<div>Contract: {`${nft.contract.toString().slice(0, 15)}...${nft.contract.toString().slice(-3)}`}</div>
					<div>Network: {nft.network}</div>
					<div>Symbol: {nft.symbol || ''}</div>
				</div>
			</div>
		</div>
	)
}

export default NFTCard
