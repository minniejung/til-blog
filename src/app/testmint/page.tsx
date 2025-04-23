'use client'

import { useEffect } from 'react'

import { useAtomValue } from 'jotai'
import { FaSpinner } from 'react-icons/fa'

import { useNfts } from '@/features/nft/hooks/useNfts'
import NFTCard from '@/features/nft/NFTCard'
import { UploadArea } from '@/features/nft/UploadArea'
import { ButtonImportWalletByKey } from '@/features/wallets/ButtonImportWalletByKey'
import { web3WalletAtom } from '@/stores/atoms'

const TestMintPage = () => {
	// const wallet = useAtomValue(ethersWalletAtom)
	const wallet = useAtomValue(web3WalletAtom)
	const { nfts, loading, refetch } = useNfts(wallet)

	useEffect(() => {
		if (wallet) refetch()
	}, [wallet])

	return (
		<div className='space-y-8'>
			<div className='flex flex-col items-center space-y-4'>
				{!wallet && (
					<div className='flex w-[400px] flex-col gap-4'>
						<ButtonImportWalletByKey />
					</div>
				)}
				<div className='pl-4 text-sm'>
					Connected wallet : {wallet ? <div className=''>{wallet.address}</div> : 'Not found'}
				</div>
			</div>

			{wallet && (
				<div className='space-y-8'>
					<UploadArea onMinted={refetch} />

					<div className='flex w-full flex-wrap justify-center'>
						{loading ? (
							<FaSpinner className='animate-spin text-xl text-gray-500' />
						) : (
							<>
								{nfts.length === 0 ? (
									<p>No NFT found</p>
								) : (
									<div className='flex w-fit flex-wrap justify-center gap-4'>
										{nfts.map((nft, index) => (
											<NFTCard key={index} nft={nft} loading={loading} />
										))}
									</div>
								)}
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default TestMintPage
