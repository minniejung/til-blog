'use client'

import { redirect, usePathname } from 'next/navigation'
import { useState } from 'react'

import { HiMenu } from 'react-icons/hi'
import { IoWallet, IoWalletOutline } from 'react-icons/io5'

import { cn } from '@/utils/helpers/cn'

export const Nav = () => {
	const path = usePathname()

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<>
			<nav className='hidden gap-8 md:flex'>
				{links.map(link => (
					<div
						key={link}
						onMouseEnter={() => link === 'Wallet' && setIsHovered(true)}
						onMouseLeave={() => link === 'Wallet' && setIsHovered(false)}
						onClick={() => redirect(`/${link.toLocaleLowerCase()}`)}
						className={cn(
							'cursor-pointer',
							path.slice(1) === link.toLocaleLowerCase() && 'font-bold',
							link === 'Wallet' ? 'text-purple-500' : 'text-[#777] hover:text-black',
						)}>
						{link === 'Wallet' ? (
							<span className='text-2xl'>{isHovered ? <IoWallet /> : <IoWalletOutline />}</span>
						) : (
							link
						)}
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
							className={cn(
								'cursor-pointer transition',
								path.slice(1) === link.toLocaleLowerCase() && 'font-bold',
								link === 'Wallet' ? 'text-purple-500' : 'text-[#777] hover:text-black',
							)}>
							{link}
						</div>
					))}
				</nav>
			)}
		</>
	)
}

const links = [
	'About',
	'TIL-Blockchain',
	'TIL-Front',
	'TIL-Back',
	'TIL-Solidity',
	'Scoby',
	'Chart',
	'Explorer',
	'Wallet',
]
