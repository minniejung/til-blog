import React, { ReactNode } from 'react'

import { HiArrowLeft } from 'react-icons/hi'

type ButtonGoBackType = {
	onClick: () => void
	children: ReactNode
}

export const ButtonGoBack = ({ onClick, children }: ButtonGoBackType) => {
	return (
		<div onClick={onClick} className='mb-8 flex cursor-pointer flex-row items-center gap-2 text-[#5e5e5e]'>
			<HiArrowLeft className='fill-[#5e5e5e]' />
			<span>{children}</span>
		</div>
	)
}
