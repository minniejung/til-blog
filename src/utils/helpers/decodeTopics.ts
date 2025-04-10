import Web3 from 'web3'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

export const decodeTopic = (topic: string) => {
	if (!topic) return '-'

	try {
		const decodedText = web3.utils.hexToUtf8(topic)
		if (decodedText.trim().length > 0) {
			return decodedText
		}
	} catch (error) {
		console.error('Error decoding topic:', error)
	}

	if (topic.length === 66 && topic.startsWith('0x')) {
		const possibleAddress = '0x' + topic.slice(26)
		if (web3.utils.isAddress(possibleAddress)) {
			return possibleAddress
		}
	}

	return topic
}
