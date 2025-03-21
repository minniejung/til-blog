import React from 'react'

import { ErrorMessage } from '@/components/ErrorMessage'
import { LoadingMessage } from '@/components/LoadingMessage'
import { cn } from '@/utils/helpers/cn'

import useContractChecker from './hooks/useContractChecker'

export const ContractData = ({ address }: { address: string }) => {
	const { contractData, loading, error } = useContractChecker(address)

	const baseStyle = 'border-b p-4'

	const formatValue = (key: string, value: string | number) => {
		switch (key) {
			case 'contractCode':
				return `${value.toString().slice(0, 300)} ... ${value.toString().slice(-10)}`

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
								<LoadingMessage msg='Loading contract detail...' />
							</td>
						</tr>
					</tbody>
				) : error ? (
					<tbody>
						<tr>
							<td colSpan={2} className={cn('p-4 text-center')}>
								<ErrorMessage msg={error} />
							</td>
						</tr>
					</tbody>
				) : (
					contractData && (
						<tbody>
							{Object.entries(contractData).map(([key, value], i) => (
								<tr key={i} className='border-b last:border-b-0'>
									<td className='w-[185px] border-r p-4 font-bold'>{key}</td>
									<td className='break-all p-4'>{formatValue(key, value)}</td>
								</tr>
							))}
						</tbody>
					)
				)}
			</table>
		</div>
	)
}
