import React from 'react'

import { TiWarningOutline } from 'react-icons/ti'

export const ErrorMessage = ({ msg }: { msg: string }) => {
	return (
		<span className='flex flex-row items-center justify-center gap-2 text-sm font-semibold text-red-600'>
			<TiWarningOutline className='text-lg' />
			{msg}
		</span>
	)
}
