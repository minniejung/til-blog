import Link from 'next/link'
import React from 'react'

import Web3 from 'web3'

import { ErrorMessage } from '@/components/ErrorMessage'
import { LoadingMessage } from '@/components/LoadingMessage'
import { cn } from '@/utils/helpers/cn'
import { TxDataType } from '@/utils/types'

import useTxData from './hooks/useTxData'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

export const TxData = ({ hash }: { hash: string }) => {
	const { transaction, loading, error } = useTxData(hash)

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
				return `${web3.utils.fromWei(Number(transaction.value), 'ether')} POL`
			case 'gasPrice':
				return `${web3.utils.fromWei(Number(transaction.gasPrice), 'gwei')} Gwei`
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
								<LoadingMessage msg='Loading transaction data...' />
							</td>
						</tr>
					</tbody>
				) : error ? (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<ErrorMessage msg='Transaction not found' />
							</td>
						</tr>
					</tbody>
				) : (
					transaction && (
						<tbody>
							{Object.entries(transaction).map(([key, txValue], i) => (
								<tr key={i} className='border-b last:border-b-0'>
									<td className='w-[185px] border-r p-4 font-bold'>{key}</td>
									<td className='break-all p-4'>
										{formatValue(key, typeof txValue === 'string' ? txValue : txValue?.toString() || '', transaction)}
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
