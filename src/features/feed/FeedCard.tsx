import { FaHandHoldingHeart, FaHeart, FaRegComment } from 'react-icons/fa'

export const FeedCard = () => {
	return (
		<div className='overflow-hidden rounded-lg bg-white shadow-md'>
			{/* Placeholder for Image */}
			<div className='flex h-[400px] w-full items-center justify-center bg-gray-300 text-gray-500'>No Image</div>
			{/* Content */}
			<div className='p-4'>
				{/* User Info */}
				<div className='flex items-center gap-3'>
					<div className='h-10 w-10 rounded-full bg-gray-400' /> {/* Avatar Placeholder */}
					<span className='font-semibold text-gray-900'>Username</span>
				</div>

				{/* Caption */}
				<p className='mt-2 text-sm text-gray-700'>This is a sample caption for the post. Add any description here.</p>

				{/* Action Buttons */}
				<div className='mt-3 flex items-center justify-between text-gray-600'>
					<button className='flex items-center gap-2 hover:text-red-500'>
						<FaHeart className='text-xl' /> 24
					</button>
					<button className='flex items-center gap-2 hover:text-blue-500'>
						<FaRegComment className='text-xl' /> 10
					</button>
					<button className='flex items-center gap-2 hover:text-green-500'>
						<FaHandHoldingHeart className='text-xl' /> Donate
					</button>
				</div>
			</div>
		</div>
	)
}
