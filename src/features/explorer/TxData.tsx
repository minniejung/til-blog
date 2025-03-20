import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion'
import Web3 from 'web3'

import { cn } from '@/utils/helpers/cn'
import { TxDataType } from '@/utils/types'

import useTxData from './hooks/useTxData'

const web3 = new Web3('https://polygon-rpc.com')

export const TxData = ({ hash }: { hash: string }) => {
	const { transaction } = useTxData(hash)

	const baseStyle = 'border-b p-4'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: string, transaction: TxDataType) => {
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
			case 'value':
				return `${web3.utils.fromWei(transaction.value, 'ether')} POL`
			case 'gasPrice':
				return `${web3.utils.fromWei(transaction.gasPrice, 'gwei')} Gwei`
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
				{transaction ? (
					<tbody>
						{Object.entries(transaction).map(([key, txValue], i) => (
							<tr key={i} className='border-b last:border-b-0'>
								<td className='w-[185px] border-r p-4 font-bold'>{key}</td>
								<td className='break-all p-4'>{formatValue(key, txValue ?? '', transaction)}</td>
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
									Loading transaction data...
								</motion.div>
							</td>
						</tr>
					</tbody>
				)}
			</table>
		</div>
	)
}
