import Image from 'next/image'

import { FaSpinner } from 'react-icons/fa'

import { Tnft } from '@/utils/types/nft.types'

const NFTCard = ({ nft, loading }: { nft: Tnft; loading: boolean }) => {
	return (
		<div className='flex h-[400px] w-fit flex-col gap-4 rounded-lg border p-2'>
			<div className='relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
				<div className='relative flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
					{loading ? (
						<FaSpinner className='animate-spin text-2xl text-gray-400' />
					) : nft.image ? (
						<Image src={nft.image} alt={nft.name} width={200} height={200} className='h-full w-full object-cover' />
					) : (
						<span className='text-xs text-gray-400'>No Image</span>
					)}
				</div>
				<div className='z-1 absolute bottom-2 right-2 rounded-lg border bg-white px-2 py-1 text-xs'>
					# {nft.tokenId}
				</div>
			</div>
			<div className='max-w-[200px] space-y-1 pl-2'>
				<div className='font-bold capitalize'>{nft.name}</div>
				<div className='whitespace-wrap max-h-[56px] overflow-hidden text-xs text-gray-500'>
					{nft.description
						? nft.description.length > 116
							? nft.description.slice(0, 116) + '...'
							: nft.description
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
