import Image from 'next/image'
import React, { useState } from 'react'

import { FaUpload } from 'react-icons/fa'

import Button from '@/components/buttons/Button'
import { uploadFileToIPFS } from '@/utils/api/pinata'
import { Timage } from '@/utils/nft.types'

type UploadProps = {
	handleImageUpload: (img: Timage) => void
}

export const ButtonUpload = ({ handleImageUpload }: UploadProps) => {
	const [file, setFile] = useState<File | null>(null)
	const [preview, setPreview] = useState<string | null>(null)
	const [uploading, setUploading] = useState<boolean>(false)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0]
		if (selectedFile) {
			setFile(selectedFile)

			if (selectedFile.type.startsWith('image/')) {
				const reader = new FileReader()
				reader.onloadend = () => setPreview(reader.result as string)
				reader.readAsDataURL(selectedFile)
			}
		}
	}

	const handleUpload = async () => {
		if (!file) {
			alert('파일을 선택해주세요.')
			return
		}

		setUploading(true)

		const formData = new FormData()
		formData.append('file', file)
		formData.append('name', file.name)
		formData.append('network', 'public')

		try {
			const result = await uploadFileToIPFS(formData)
			handleImageUpload({
				url: result,
				preview: preview,
			})
		} catch (error) {
			console.error('파일 업로드 실패:', error)
			alert('파일 업로드 실패!')
		} finally {
			setUploading(false)
		}
	}

	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='relative h-[100px] w-[100px] overflow-hidden rounded-lg bg-gray-100'>
				{preview ? (
					<Image src={preview} alt='preview' width={100} height={100} className='h-full w-full object-cover' />
				) : (
					<label className='flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 text-gray-400'>
						<FaUpload className='text-2xl' />
						<span className='text-xs'>Click to upload</span>
						<input type='file' onChange={handleFileChange} className='hidden' />
					</label>
				)}
			</div>

			<Button
				onClick={handleUpload}
				disabled={uploading}
				className='h-[40px] w-[100px] border border-purple-500 bg-white text-sm text-purple-500 hover:bg-purple-500 hover:text-white'>
				{uploading ? 'Uploading...' : 'Upload!'}
			</Button>
		</div>
	)
}
