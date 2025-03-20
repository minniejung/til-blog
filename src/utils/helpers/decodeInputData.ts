'use client'

import Web3 from 'web3'

/* eslint-disable @typescript-eslint/no-explicit-any */

const web3 = new Web3('https://polygon-rpc.com')

export const decodeInputData = (input: string, abi: any) => {
	if (!input || input === '0x') return { error: 'No input data' }

	try {
		const methodSignature = input.slice(0, 10)
		console.log('Extracted Method Signature:', methodSignature)

		const method = abi.find(
			(item: any) => item.type === 'function' && web3.eth.abi.encodeFunctionSignature(item) === methodSignature,
		)

		if (!method) {
			// console.warn('Unknown function signature:', methodSignature)
			// console.warn('Available ABI Methods:', abi.map((item: any) => item.name).filter(Boolean))
			return { error: 'Unknown function signature' }
		}

		const decodedParams = web3.eth.abi.decodeParameters(method.inputs, `0x${input.slice(10)}`)

		return {
			methodName: method.name,
			methodId: methodSignature,
			params: decodedParams,
		}
	} catch (error) {
		return { error: error instanceof Error ? error.message : 'Unknown decoding error' }
	}
}
