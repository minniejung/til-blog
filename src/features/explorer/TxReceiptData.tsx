import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/utils/helpers/cn'

import useTxData from './hooks/useTxData'

export const TxReceiptData = ({ hash }: { hash: string }) => {
	const { receipt } = useTxData(hash)

	const baseStyle = 'border-b p-4'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: string | bigint | string[] | undefined) => {
		switch (key) {
			case 'blockNumber':
				return (
					<Link href={`/explorer/block/${value}`} className={linkStyle}>
						{value}
					</Link>
				)
			case 'from':
			case 'to':
				return (
					<Link href={`/explorer/contract/${value}`} className={linkStyle}>
						{value}
					</Link>
				)
			case 'transactionHash':
				return (
					<Link href={`/explorer/tx/${value}`} className='text-blue-600 hover:underline'>
						{value}
					</Link>
				)
			default:
				return value
		}
	}

	return (
		<div className='flex flex-col rounded-lg border border-gray-300'>
			<table className='w-full text-sm'>
				<thead>
					<tr className='bg-purple-100'>
						<th className={cn('w-[185px] border-r border-r-purple-200', baseStyle)}>Key</th>
						<th className={cn(baseStyle)}>Value</th>
					</tr>
				</thead>
				{receipt ? (
					<tbody>
						{Object.entries(receipt).map(([key, receiptValue], i) => (
							<tr key={i} className='border-b last:border-b-0'>
								<td className='w-[185px] border-r p-4 font-bold'>{key}</td>
								<td className='break-all'>
									{key === 'logs' && Array.isArray(receiptValue) ? (
										receiptValue.map((log, index) => (
											<div key={index} className='w-full border-b text-sm last:border-b-0'>
												<div className='bg-gray-100 px-4 py-2 text-center font-bold text-gray-700'>Log {index + 1}</div>
												<table className='w-full'>
													<tbody>
														{Object.entries(log).map(([logKey, logValue], j) => (
															<tr key={j} className='border-b last:border-b-0'>
																<td className='w-[130px] border-b border-r p-2 font-semibold'>{logKey}</td>
																<td className='border-b p-2'>{formatValue(logKey, logValue)}</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										))
									) : (
										<div className='p-4'>{formatValue(key, receiptValue)}</div>
									)}
								</td>
							</tr>
						))}
					</tbody>
				) : (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
									Loading transaction receipt data...
								</motion.div>
							</td>
						</tr>
					</tbody>
				)}
			</table>
		</div>
	)
}
