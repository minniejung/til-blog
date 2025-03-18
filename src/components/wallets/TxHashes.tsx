import Link from 'next/link'
import React from 'react'

import { useAtomValue } from 'jotai'
import { TbDatabaseSearch } from 'react-icons/tb'

import { txHashesAtom } from '@/stores/atoms'
import { cn } from '@/utils/helpers/cn'

export const TxHashes = () => {
	const txHashes = useAtomValue(txHashesAtom)

	const tableStyle = 'border-t border-b border-gray-300 px-4 py-2'

	return (
		<div className='flex w-[500px] flex-col space-y-2 rounded-lg border border-gray-300 py-4'>
			<span className='flex flex-row items-center gap-2 px-4 pb-2 font-bold text-gray-600'>
				<TbDatabaseSearch className='text-2xl' />
				Transactions
			</span>

			{txHashes.length > 0 ? (
				<table className='w-full text-sm'>
					<thead>
						<tr>
							<th className={cn('border-r', tableStyle)}>#</th>
							<th className={cn('border-r', tableStyle)}>Transaction Hash</th>
							<th className={cn(tableStyle)}>Status</th>
						</tr>
					</thead>
					<tbody>
						{txHashes.map((hash, index) => (
							<tr key={index} className='border-b border-gray-300'>
								<td className={cn('border-r text-center font-bold', tableStyle)}>{index + 1}</td>
								<td className={cn('border-r', tableStyle)}>
									<a
										href={`https://kairos.kaiascan.io/tx/${hash}`}
										target='_blank'
										rel='noopener noreferrer'
										className='underline'>
										{hash.slice(0, 35) + '...' + hash.slice(-3)}
									</a>
								</td>
								<td className='whitespace-nowrap px-2 text-center'>✅ Success</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<table className='w-[500px] text-sm'>
					<thead>
						<tr>
							<th className={cn('border-r', tableStyle)}>#</th>
							<th className={cn('border-r', tableStyle)}>Transaction Hash</th>
							<th className={cn(tableStyle)}>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-b-0 border-gray-300'>
							<td colSpan={3} className={cn('text-center', tableStyle)}>
								No Transaction Data Found
							</td>
						</tr>
					</tbody>
				</table>
			)}

			<Link href='https://kairos.kaiascan.io/' target='_blank' className='mr-4 pt-1 text-right text-xs text-gray-500'>
				https://kairos.kaiascan.io/tx
			</Link>
		</div>
	)
}
