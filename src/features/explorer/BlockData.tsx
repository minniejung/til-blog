import Link from 'next/link'
import React from 'react'

import { ErrorMessage } from '@/components/ErrorMessage'
import { LoadingMessage } from '@/components/LoadingMessage'
import { cn } from '@/utils/helpers/cn'

import useBlockData from './hooks/useBlockData'

export const BlockData = ({ blockNumber }: { blockNumber: number }) => {
	const { block, loading, error } = useBlockData(blockNumber)

	const baseStyle = 'border-b p-4'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: string | bigint | string[] | undefined) => {
		switch (key) {
			case 'number':
				return (
					<Link href={`/explorer/block/${value}`} className={linkStyle}>
						{value}
					</Link>
				)
			case 'transactions':
				return (
					<Link href={`/explorer/tx/${value}`} className={linkStyle}>
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
				{loading ? (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<LoadingMessage
									msg='Loading block data...
'
								/>
							</td>
						</tr>
					</tbody>
				) : error ? (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<ErrorMessage msg='Block not found' />
							</td>
						</tr>
					</tbody>
				) : (
					block && (
						<tbody>
							{Object.entries(block).map(([key, value], i) => (
								<tr key={i} className='border-b last:border-b-0'>
									<td className='w-[185px] border-r p-4 font-bold'>
										{key === 'transactions' ? `${key} (${block.transactions.length})` : key}
									</td>
									<td className='break-all p-4'>
										{key === 'transactions' && Array.isArray(value)
											? value.map((tx, j) => <div key={j}>{formatValue(key, tx)}</div>)
											: formatValue(key, value)}
									</td>
								</tr>
							))}
						</tbody>
					)
				)}
			</table>
		</div>
	)
}
