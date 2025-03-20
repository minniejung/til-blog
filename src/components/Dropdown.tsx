import { ReactNode, useState } from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/utils/helpers/cn'

interface DropdownProps {
	data: Record<string, any>
	initialRows?: number
	loading: boolean
	renderValue?: (key: string, value: any) => ReactNode
}

export const Dropdown = ({ data, initialRows = 5, loading, renderValue }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const entries = Object.entries(data)
	const visibleEntries = isOpen ? entries : entries.slice(0, initialRows)

	const baseStyle = 'border-b p-4'

	return (
		<div className='flex flex-col rounded-lg border border-gray-300'>
			<motion.div
				initial={{ scale: 0.95, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.95, opacity: 0 }}
				transition={{ type: 'spring', stiffness: 100, damping: 15 }}
				className='w-full overflow-hidden'>
				<table className='w-full text-sm'>
					<thead>
						<tr className='bg-purple-100'>
							<th className={cn('border-r border-r-purple-200', baseStyle)}>Key</th>
							<th className={cn(baseStyle)}>Value</th>
						</tr>
					</thead>
					<tbody>
						{loading ? (
							<tr className='border-b border-gray-300'>
								<td colSpan={2} className='p-4 text-center'>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
										Loading data...
									</motion.div>
								</td>
							</tr>
						) : (
							visibleEntries.map(([key, value], i) => (
								<tr key={i} className='border-b last:border-b-0'>
									<td className='w-[185px] border-r p-4 font-bold'>{key}</td>
									<td className='break-all p-4'>{renderValue ? renderValue(key, value) : value}</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</motion.div>

			{entries.length > initialRows && (
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='w-full border-t py-4 font-semibold text-gray-600 hover:underline'>
					{isOpen ? 'See less...' : 'See more...'}
				</button>
			)}
		</div>
	)
}

//TODO
