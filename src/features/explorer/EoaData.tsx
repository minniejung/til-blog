import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import Web3 from 'web3'

import { cn } from '@/utils/helpers/cn'

import useUserTxHistory from './hooks/useUserTxHistory'

const web3 = new Web3('https://polygon-rpc.com')

export const EoaData = ({ address }: { address: string }) => {
	const { transactions } = useUserTxHistory(address)

	const baseStyle = 'border-b p-4 border-r border-r-purple-200'
	const baseStyleTd = 'break-all border-r p-2'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: string | bigint | string[] | undefined) => {
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
				{transactions.length > 0 ? (
					<tbody>
						{transactions.map(tx => (
							<tr key={tx.hash} className='border-b last:border-b-0'>
								<td className={cn(baseStyleTd)}>{formatValue('hash', tx.hash)}</td>
								<td className={cn('whitespace-nowrap', baseStyleTd)}>{formatValue('blockNumber', tx.blockNumber)}</td>
								<td className={cn('whitespace-nowrap', baseStyleTd)}>{formatValue('timestamp', tx.timestamp)}</td>
								<td className={cn(baseStyleTd)}>{formatValue('from', tx.from)}</td>
								<td className={cn(baseStyleTd)}>{formatValue('to', tx.to)}</td>
								<td className={cn(baseStyleTd)}>{formatValue('value', tx.value)}</td>
							</tr>
						))}
					</tbody>
				) : (
					<tbody>
						<tr>
							<td colSpan={5} className={cn('w-full p-4')}>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
									Loading transactions...
								</motion.div>
							</td>
						</tr>
					</tbody>
				)}
			</table>
		</div>
	)
}
