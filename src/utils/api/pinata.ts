import axios from 'axios'

import { Tmetadata } from '@/utils/types/nft.types'

const jwt = process.env.NEXT_PUBLIC_PINATA_JWT

export const uploadFileToIPFS = async (formData: FormData) => {
	const response = await axios.post('https://uploads.pinata.cloud/v3/files', formData, {
		headers: {
			Authorization: `Bearer ${jwt}`,
			'Content-Type': 'multipart/form-data',
		},
	})

	return `https://lavender-left-coyote-594.mypinata.cloud/ipfs/${response.data.data.cid}`
}

export const uploadMetaData = async (metadata: Tmetadata) => {
	const data = JSON.stringify({
		pinataMetadata: {
			name: metadata.name,
		},
		pinataContent: metadata,
	})

	try {
		const response = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', data, {
			headers: {
				Authorization: `Bearer ${jwt}`,
				'Content-Type': 'application/json',
			},
		})

		const tokenUri = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`
		return tokenUri
	} catch (error) {
		console.error(error)
	}
}
