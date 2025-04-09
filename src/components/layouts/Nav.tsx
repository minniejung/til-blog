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
			<nav className='hidden gap-8 xs:flex'>
				{links.map((link, i) => {
					if (link.startsWith('TIL-')) {
						if (i === links.findIndex(l => l.startsWith('TIL-'))) {
							return (
								<div key='TIL' className='group relative cursor-pointer text-[#777] hover:text-black'>
									<span className='font-semibold'>* T I L *</span>
									<div className='absolute -right-40 top-6 hidden min-w-max flex-row gap-4 rounded-lg border bg-white p-4 shadow-md group-hover:flex'>
										{links
											.filter(l => l.startsWith('TIL-'))
											.map(til => (
												<div
													key={til}
													onClick={() => redirect(`/${til.toLowerCase()}`)}
													className={cn(
														'hover:cursor-pointer hover:underline',
														path.slice(1) === til.toLowerCase() && 'font-bold',
													)}>
													{til}
												</div>
											))}
									</div>
								</div>
							)
						} else {
							return null
						}
					}

					return (
						<div
							key={link}
							onMouseEnter={() => link === 'Wallet' && setIsHovered(true)}
							onMouseLeave={() => link === 'Wallet' && setIsHovered(false)}
							onClick={() => redirect(`/${link.toLowerCase()}`)}
							className={cn(
								'relative cursor-pointer',
								path.slice(1) === link.toLowerCase() && 'font-bold',
								link === 'Wallet' ? 'text-purple-500' : 'text-[#777] hover:text-black',
							)}>
							{link === 'Wallet' ? (
								<span className='text-2xl'>{isHovered ? <IoWallet /> : <IoWalletOutline />}</span>
							) : (
								link
							)}
						</div>
					)
				})}
			</nav>

			<HiMenu
				onClick={() => {
					setIsMenuOpen(!isMenuOpen)
				}}
				className='relative flex cursor-pointer text-3xl text-[#777] xs:hidden'
			/>

			{isMenuOpen && (
				<nav className='absolute right-0 top-[100px] mx-6 flex flex-col space-y-6 rounded-xl border bg-white p-4'>
					{links.map(link => (
						<div
							key={link}
							onClick={() => {
								setIsMenuOpen(false)
								redirect(`/${link.toLocaleLowerCase()}`)
							}}
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
	'TIL-ERC20',
	'TIL-Lab',
	'Scoby',
	'Chart',
	'Explorer',
	'Wallet',
]
