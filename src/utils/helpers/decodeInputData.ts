'use client'

import Web3 from 'web3'

/* eslint-disable @typescript-eslint/no-explicit-any */

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

export const decodeInputData = (input: string, abi: any) => {
	if (!input || input === '0x') {
		return { status: 'error', error: 'No input data' }
	}

	try {
		const methodSignature = input.slice(0, 10)
		const method = abi.find(
			(item: any) => item.type === 'function' && web3.eth.abi.encodeFunctionSignature(item) === methodSignature,
		)

		if (!method) {
			return { status: 'error', error: 'Unknown function signature' }
		}

		const decodedParams = web3.eth.abi.decodeParameters(method.inputs, `0x${input.slice(10)}`)

		return {
			status: 'success',
			methodName: method.name,
			methodId: methodSignature,
			params: decodedParams,
		}
	} catch (error) {
		return {
			status: 'error',
			error: error instanceof Error ? error.message : 'Unknown decoding error',
		}
	}
}
