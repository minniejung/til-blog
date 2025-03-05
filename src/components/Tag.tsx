import React from 'react'

const Tag = ({ text }: { text: string }) => {
	return (
		<div className='flex flex-row rounded-xl bg-gray-200 px-2 py-1 text-xs'>
			<span>#</span> {text}
		</div>
	)
}

export default Tag
