'use client'

import { usePathname } from 'next/navigation'

import { Header } from '@/components/layouts/Header'
import { cn } from '@/utils/helpers/cn'

import { Footer } from './Footer'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname()
	console.log('pathname', pathname)

	return (
		<main className='flex min-h-screen flex-col'>
			<div className='flex w-full flex-1 flex-col items-center'>
				<div className={cn('', pathname.includes('chart') ? 'w-screen' : 'w-full max-w-[800px]')}>
					<Header />
					<div className='w-full p-6 pt-[100px]'>{children}</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}
