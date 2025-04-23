'use client'

import Image from 'next/image'
import { useState } from 'react'

import { useAtomValue } from 'jotai'

import { Tabs } from '@/components/Tabs'
import MintContainer from '@/features/nft/MintContainer'
import MyNfts from '@/features/nft/MyNfts'
import { ButtonMetamaskWallet } from '@/features/wallets/ButtonMetamask'
import { ethersWalletAtom } from '@/stores/atoms'
import { ScobyNfts } from '@/utils/consts'

const TxTabs = [
	{ id: 'mint', label: 'MINT' },
	{ id: 'nfts', label: 'My NFTs' },
]
const MintPage = () => {
	const wallet = useAtomValue(ethersWalletAtom)

	const [activeTab, setActiveTab] = useState('mint')

	return (
		<div className='space-y-8'>
			<div className='mt-4 w-full text-center font-baloo text-2xl font-extrabold text-gray-400'>
				Mint the cutest cat in the world
			</div>

			{!wallet && (
				<>
					<div className='w-full overflow-hidden'>
						<div className='animate-marquee flex min-w-[200%] whitespace-nowrap'>
							{[...ScobyNfts, ...ScobyNfts].map(scob => (
								<div key={`${scob.id}-${Math.random()}`} className='relative mx-2 h-fit w-[256px]'>
									<Image
										src={scob.uri}
										alt='scobynft'
										width={256}
										height={384}
										className='rounded-2xl opacity-70 hover:opacity-100'
									/>
								</div>
							))}
						</div>
					</div>

					<div className='flex w-full items-center justify-center'>
						<ButtonMetamaskWallet />
					</div>
				</>
			)}

			{wallet && (
				<div className='space-y-4 pt-8'>
					<Tabs tabs={TxTabs} activeTab={activeTab} setActiveTab={setActiveTab} />

					{activeTab === 'mint' && <MintContainer />}
					{activeTab === 'nfts' && <MyNfts />}
				</div>
			)}
		</div>
	)
}

export default MintPage
