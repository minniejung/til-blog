/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link'
import React from 'react'

import Web3 from 'web3'

import { ErrorMessage } from '@/components/ErrorMessage'
import { LoadingMessage } from '@/components/LoadingMessage'
import { cn } from '@/utils/helpers/cn'

import useUserTxHistory from './hooks/useUserTxHistory'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

export const EoaData = ({ address }: { address: string }) => {
	const { transactions, loading, error } = useUserTxHistory(address)

	const baseStyle = 'border-b p-4 border-r border-r-purple-200'
	const baseStyleTd = 'break-all border-r p-2'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: any) => {
		if (value === null || value === undefined) return '-'

		switch (key) {
			case 'hash':
				return (
					<Link href={`/explorer/tx/${value}`} className={linkStyle}>
						{`${value.toString().slice(0, 23)}...${value.toString().slice(-4)}`}
					</Link>
				)
			case 'blockNumber':
				return (
					<Link href={`/explorer/block/${value}`} className={linkStyle}>
						{value}
					</Link>
				)
			case 'timestamp':
				return new Date(Number(value) * 1000).toLocaleString()
			case 'to':
			case 'from':
				return (
					<Link href={`/explorer/contract/${value}`} className={linkStyle}>
						{`${value.toString().slice(0, 23)}...${value.toString().slice(-4)}`}
					</Link>
				)
			case 'value':
				return web3.utils.fromWei(value.toString(), 'ether') + ' POL'
			default:
				return value.toString()
		}
	}

	return (
		<div className='space-y-2'>
			{transactions.length > 0 && <p className='pl-4 text-lg font-bold text-gray-600'>Recent Transactions</p>}

			<div className='flex flex-col rounded-lg border border-gray-300'>
				<table className='w-full text-sm'>
					<thead>
						<tr className='bg-purple-100'>
							<th className={cn(baseStyle)}>Hash</th>
							<th className={cn(baseStyle)}>Block</th>
							<th className={cn(baseStyle)}>Timestamp</th>
							<th className={cn(baseStyle)}>From</th>
							<th className={cn(baseStyle)}>To</th>
							<th className={cn(baseStyle)}>Value (POL)</th>
						</tr>
					</thead>
					{loading ? (
						<tbody>
							<tr>
								<td colSpan={6} className={cn('p-4 text-center')}>
									<LoadingMessage msg='Loading transactions...' />
								</td>
							</tr>
						</tbody>
					) : error || transactions.length === 0 ? (
						<tbody>
							<tr>
								<td colSpan={6} className={cn('p-4 text-center')}>
									<ErrorMessage msg='No transactions found in the last 20 blocks' />
								</td>
							</tr>
						</tbody>
					) : (
						transactions.length > 0 && (
							<tbody>
								{transactions.map(tx => (
									<tr key={tx.hash} className='border-b last:border-b-0'>
										<td className={cn(baseStyleTd)}>{formatValue('hash', tx.hash)}</td>
										<td className={cn('whitespace-nowrap', baseStyleTd)}>
											{formatValue('blockNumber', tx.blockNumber)}
										</td>
										<td className={cn('whitespace-nowrap', baseStyleTd)}>{formatValue('timestamp', tx.timestamp)}</td>
										<td className={cn(baseStyleTd)}>{formatValue('from', tx.from)}</td>
										<td className={cn(baseStyleTd)}>{formatValue('to', tx.to)}</td>
										<td className={cn(baseStyleTd)}>{formatValue('value', tx.value)}</td>
									</tr>
								))}
							</tbody>
						)
					)}
				</table>
			</div>
		</div>
	)
}
