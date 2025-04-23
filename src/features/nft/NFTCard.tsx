import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useSetAtom } from 'jotai'
import { FaSpinner } from 'react-icons/fa'

import { selectedNftAtom } from '@/stores/atoms'
import { Tnft } from '@/utils/types/nft.types'

const NFTCard = ({ nft, loading }: { nft: Tnft; loading: boolean }) => {
	const router = useRouter()
	const setSelectedNft = useSetAtom(selectedNftAtom)

	return (
		<div
			onClick={() => {
				setSelectedNft(nft)
				router.push(`/mint/${nft.tokenId}`)
			}}
			className='flex h-fit w-fit cursor-pointer flex-col gap-4 rounded-lg border p-2 hover:bg-gray-100'>
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
				<div className='z-1 absolute bottom-2 right-2 rounded-lg border bg-white px-2 py-1 text-xs font-semibold'>
					# {nft.tokenId}
				</div>
			</div>
			<div className='max-w-[200px] space-y-1 pl-2'>
				<div className='whitespace-nowrap text-xl font-bold capitalize opacity-80'>
					{nft.name.length > 16 ? nft.name.slice(0, 16) + '...' : nft.name}
				</div>
				<div className='whitespace-wrap h-[24px] overflow-hidden text-xs text-gray-500'>
					{nft.description
						? nft.description.length > 52
							? nft.description.slice(0, 52) + '...'
							: nft.description
						: 'No description'}
				</div>
				<div className='pr-2 pt-4 text-right font-bold opacity-80'>{(Math.random() * 19.99 + 0.01).toFixed(2)} ETH</div>
			</div>
		</div>
	)
}

export default NFTCard
