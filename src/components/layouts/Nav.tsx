'use client'

import { redirect } from 'next/navigation'
import { useState } from 'react'

import { HiMenu } from 'react-icons/hi'

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<nav className='hidden gap-8 md:flex'>
				{links.map(link => (
					<div
						key={link}
						onClick={() => redirect(`/${link.toLocaleLowerCase()}`)}
						className='cursor-pointer text-[#777] transition hover:text-black'>
						{link}
					</div>
				))}
			</nav>

			<HiMenu
				onClick={() => {
					setIsMenuOpen(!isMenuOpen)
				}}
				className='relative flex cursor-pointer text-3xl text-[#777] md:hidden'
			/>

			{isMenuOpen && (
				<nav className='absolute right-0 top-[100px] mx-6 flex flex-col space-y-6 rounded-xl border bg-white p-4'>
					{links.map(link => (
						<div
							key={link}
							onClick={() => redirect(`/${link.toLocaleLowerCase()}`)}
							className='cursor-pointer text-[#777] transition hover:text-black'>
							{link}
						</div>
					))}
				</nav>
			)}
		</>
	)
}

const links = ['About', 'TIL-blockchain', 'TIL-Front', 'TIL-Back', 'TIL-Solidity', 'Scoby', 'Chart']
