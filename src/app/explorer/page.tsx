'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { FaCopy } from 'react-icons/fa'
import { toast } from 'react-toastify'

import Button from '@/components/buttons/Button'
import { copyToClipboard } from '@/utils/helpers/copyToClipboard'

const testItems = [
	{ title: 'Block Number', value: '19459296' },
	{ title: 'CA', value: '0xFcB3E963ae85Ae70B884C2FcE183E77969CD038e' },
	{ title: 'EOA', value: '0xfcA1C3A52C77e89f0A2A8AC635AfCAEc3F76e5EE' },
	{ title: 'Tx Hash', value: '0x003f65113bee597e5985a3f46d87e1752d715fb123773fab9d5ffc94cb7df1cb' },
]

const ExplorerPage = () => {
	const router = useRouter()

	const [searchInput, setSearchInput] = useState<string>('')

	const getSearchType = (input: string) => {
		if (/^0x[a-fA-F0-9]{40}$/.test(input)) {
			return 'address'
		}
		if (/^0x[a-fA-F0-9]{64}$/.test(input)) {
			return 'tx'
		}
		if (/^\d+$/.test(input)) {
			return 'block'
		}
		return 'unknown'
	}

	const handleSearch = () => {
		const type = getSearchType(searchInput)
		if (type === 'address') {
			router.push(`/explorer/contract/${searchInput}`)
		} else if (type === 'tx') {
			router.push(`/explorer/tx/${searchInput}`)
		} else if (type === 'block') {
			router.push(`/explorer/block/${searchInput}`)
		} else {
			toast.error('Invalid input. Please enter a valid contract address, transaction hash, or block number.')
		}
	}

	return (
		<div>
			<div className='mt-4 flex w-full justify-end gap-2'>
				<input
					type='text'
					placeholder='Enter Contract, TX Hash, or Block Number'
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
					className='w-full rounded-lg border border-gray-300 p-3'
				/>
				<Button
					onClick={handleSearch}
					className='w-[200px] border-transparent bg-purple-500 text-white hover:bg-purple-600'>
					Search
				</Button>
			</div>

			<div className='ml-4 mt-10'>
				<p>Try with it 👀 (https://amoy.polygonscan.com/)</p>

				<div className='mt-4 space-y-2'>
					{testItems.map((item, i) => (
						<div key={i} className='flex flex-row gap-2'>
							<b>{item.title} :</b>
							<span
								onClick={() => {
									setSearchInput(item.value)
									copyToClipboard(item.value)
								}}
								className='flex cursor-pointer flex-row items-baseline gap-2 hover:underline'>
								{item.value}
								<FaCopy className='cursor-pointer text-purple-400' />
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ExplorerPage
