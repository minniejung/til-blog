import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { useAtomValue } from 'jotai'
import { FaSpinner } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import { web3WalletAtom } from '@/stores/atoms'
import { uploadMetaData } from '@/utils/api/pinata'
import { Timage, Tmetadata } from '@/utils/nft.types'

import { ButtonUpload } from './ButtonUpload'
import { mint } from './hooks/web3'

type UploadAreaProps = {
	onMinted?: () => void
}

export const UploadArea = ({ onMinted }: UploadAreaProps) => {
	const router = useRouter()
	const wallet = useAtomValue(web3WalletAtom)

	const [img, setImg] = useState<Timage>({ url: '', preview: '' })
	const [metadata, setMetadata] = useState<Tmetadata>({
		name: '',
		description: '',
		image: '',
	})
	const [loading, setLoading] = useState<boolean>(false)

	const handleMetadata = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		setMetadata({
			...metadata,
			[e.target.name]: e.target.value,
		})
	}

	const handleMint = async () => {
		setLoading(true)
		try {
			if (wallet) {
				const tokenUri = await uploadMetaData(metadata)
				if (!tokenUri) return

				const mintNFT = await mint(wallet, tokenUri)
				if (mintNFT) {
					router.refresh()
					onMinted?.()
				}
			}
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
			setMetadata({
				name: '',
				description: '',
				image: '',
			})
		}
	}

	const handleImageUpload = (img: Timage) => {
		if (img.preview) {
			setImg(img)
			setMetadata(prevMetadata => ({
				...prevMetadata,
				image: img.url,
			}))
		}
	}
	return (
		<div className='border-y border-gray-300 p-8'>
			{img.preview ? (
				<div className='flex w-full flex-col gap-4'>
					<div className='flex flex-row gap-4'>
						<div className='relative h-[100px] w-[100px] overflow-hidden rounded-lg bg-gray-100'>
							<Image src={img.preview} alt='preview' fill className='object-cover' />
						</div>
						<div className='flex flex-1 flex-col gap-2'>
							{Object.keys(metadata).map(
								key =>
									key !== 'image' && (
										<input
											key={key}
											name={key}
											value={metadata[key as keyof typeof metadata]}
											onChange={handleMetadata}
											placeholder={`NFT ${key}`}
											className='w-full rounded-lg border border-gray-300 p-3'
										/>
									),
							)}
						</div>
					</div>

					<Button
						onClick={handleMint}
						className='h-[40px] w-full max-w-[300px] self-center border border-purple-500 bg-white text-sm text-purple-500 hover:bg-purple-500 hover:text-white'>
						{loading ? <FaSpinner className='animate-spin text-xl text-gray-500' /> : 'Mint'}
					</Button>
				</div>
			) : (
				<ButtonUpload handleImageUpload={handleImageUpload} />
			)}
		</div>
	)
}
