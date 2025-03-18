import React, { ReactNode } from 'react'

import { IoAlertCircleOutline } from 'react-icons/io5'

type ErrorMessageType = {
	condition: boolean
	children: ReactNode
}
export const ErrorMessage = ({ condition, children }: ErrorMessageType) => {
	return (
		condition && (
			<span className='itmes-center flex flex-row gap-2 self-center text-center text-xs font-bold text-red-500'>
				<IoAlertCircleOutline className='text-lg' />
				{children}
			</span>
		)
	)
}
