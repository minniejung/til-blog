'use client'

import Link from 'next/link'
import { redirect, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import { HiMenu } from 'react-icons/hi'

import { cn } from '@/utils/helpers/cn'

export const Nav = () => {
	const router = useRouter()
	const path = usePathname()

	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

	return (
		<>
			<nav className='z-50 flex hidden items-center gap-8 xs:flex'>
				{links.map(link => {
					const isTIL = link === 'TIL'
					const isActive = path.slice(1) === link.toLowerCase()

					if (isTIL) {
						return (
							<div
								key='TIL'
								onClick={() => redirect('/til')}
								className='group relative cursor-pointer text-[#777] hover:text-black'>
								<span className='font-semibold'>T I L</span>
								<div className='absolute -right-40 top-6 hidden min-w-max flex-row gap-4 rounded-lg border bg-white p-4 shadow-md group-hover:flex'>
									{tilLinks.map(til => (
										<div
											key={til}
											onClick={e => {
												e.stopPropagation()
												router.push(`/til/${til.toLowerCase()}`)
											}}
											className='hover:cursor-pointer hover:underline'>
											TIL-{til}
										</div>
									))}
								</div>
							</div>
						)
					}

					return (
						<div
							key={link}
							onClick={() => redirect(`/${link.toLowerCase()}`)}
							className={cn('relative cursor-pointer', isActive && 'font-bold')}>
							{link}
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

					<Link href='https://mint-scob.vercel.app/mint' target='_blank'>
						<div className='rounded-full bg-purple-100 px-4 py-2 font-bold text-[#777] hover:text-purple-500'>
							Mint Page {'>>'}
						</div>
					</Link>
					<Link href='https://attendance-meow.vercel.app/home' target='_blank'>
						<div className='rounded-full bg-purple-100 px-4 py-2 font-bold text-[#777] hover:text-purple-500'>
							Meta Tx {'>>'}
						</div>
					</Link>
				</nav>
			)}
		</>
	)
}

const links = ['About', 'TIL', 'Projects', 'Scoby', 'Chart']

const tilLinks = ['Blockchain', 'Solidity', 'ERC', 'Defi', 'Lab', 'Front', 'Back']
