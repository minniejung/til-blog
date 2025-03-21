import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import Web3 from 'web3'

import { ErrorMessage } from '@/components/ErrorMessage'
import { LoadingMessage } from '@/components/LoadingMessage'
import { ERC20_ABI } from '@/utils/abi/ERC20_ABI'
import { cn } from '@/utils/helpers/cn'
import { decodeInputData } from '@/utils/helpers/decodeInputData'
import { DecodedInputDataType } from '@/utils/types'

import useTxData from './hooks/useTxData'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

export const TxDecodedInput = ({ hash }: { hash: string }) => {
	const [decodedInput, setDecodedInput] = useState<DecodedInputDataType | null>(null)
	const { transaction, loading } = useTxData(hash)

	const baseStyle = 'border-b p-4'
	const baseStyleTd = 'w-[185px] border-r p-4 font-bold'
	const linkStyle = 'text-blue-600 hover:underline'

	const formatValue = (key: string, value: string | bigint) => {
		switch (key) {
			case '_from':
			case '_to':
				return (
					<Link href={`/explorer/contract/${value}`} className={linkStyle}>
						{value}
					</Link>
				)
			case '_value':
				return `${web3.utils.fromWei(value.toString(), 'ether')} POL`
			default:
				return value
		}
	}

	useEffect(() => {
		if (transaction?.input) {
			const decoded = decodeInputData(transaction.input, ERC20_ABI) as DecodedInputDataType
			setDecodedInput(decoded)
		}
	}, [transaction])

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
				) : decodedInput?.status === 'error' ? (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<ErrorMessage msg='Decoded input not found' />
							</td>
						</tr>
					</tbody>
				) : (
					decodedInput?.status === 'success' && (
						<tbody>
							<tr>
								<td className={cn('border-b', baseStyleTd)}>Method ID</td>
								<td className='border-b p-4'>{decodedInput.methodId}</td>
							</tr>
							<tr>
								<td className={cn('border-b', baseStyleTd)}>Method Name</td>
								<td className='border-b p-4'>{decodedInput.methodName || 'N/A'}</td>
							</tr>

							{decodedInput.params &&
								Object.entries(decodedInput.params)
									.filter(([key]) => isNaN(Number(key)))
									.map(([key, value], i) => (
										<tr key={i} className='border-b last:border-b-0'>
											<td className={cn(baseStyleTd)}>{key}</td>
											<td className='p-4'>{formatValue(key, value)}</td>
										</tr>
									))}
						</tbody>
					)
				)}
			</table>
		</div>
	)
}
