import React from 'react'

import { useAtomValue } from 'jotai'

import { txHashesAtom } from '@/stores/atoms'
import { cn } from '@/utils/helpers/cn'

export const TxHashes = () => {
	const txHashes = useAtomValue(txHashesAtom)

	// const txHashes = [
	// 	'0x5a48d0564632a55ca08461c36d8b2f99c04d76b07b26d17b10caacce3a64cebb',
	// 	'0x5a48d0564632a55ca08461c36d8b2f99c04d76b07b26d17b10caacce3a64cebb',
	// 	'0x5a48d0564632a55ca08461c36d8b2f99c04d76b07b26d17b10caacce3a64cebb',
	// ]

	const tableStyle = 'border border-gray-300 px-4 py-2'

	return (
		<>
			<p className='text-2xl font-bold text-[#5e5e5e]'>Transactions</p>

			{txHashes.length > 0 ? (
				<table className='w-[500px] border border-gray-300 text-sm'>
					<thead>
						<tr>
							<th className={cn(tableStyle)}>#</th>
							<th className={cn(tableStyle)}>Transaction Hash</th>
						</tr>
					</thead>
					<tbody>
						{txHashes.map((hash, index) => (
							<tr key={index} className='border-b border-gray-300'>
								<td className={cn('text-center font-bold', tableStyle)}>{index + 1}</td>
								<td className={cn(tableStyle)}>
									<a href={`https://kairos.kaiascan.io/tx/${hash}`} target='_blank' rel='noopener noreferrer'>
										{hash.slice(0, 30) + '...' + hash.slice(-3)}
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<table className='w-[500px] border border-gray-300 text-sm'>
					<thead>
						<tr>
							<th className={cn(tableStyle)}>#</th>
							<th className={cn(tableStyle)}>Transaction Hash</th>
						</tr>
					</thead>
					<tbody>
						<tr className='border-b border-gray-300'>
							<td colSpan={2} className={cn('text-center', tableStyle)}>
								No Transaction Data Found
							</td>
						</tr>
					</tbody>
				</table>
			)}
		</>
	)
}
