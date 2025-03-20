import { ReactNode } from 'react'

export type TilCardType = {
	id: number
	date: string
	tags: string[]
	title: string
	content: ReactNode
}

export type NetworkType = {
	id: number
	name: string
	currency: string
	rpcUrl: string
}

export type BlockDataType = {
	baseFeePerGas: bigint | undefined
	difficulty: bigint | undefined
	extraData: string
	gasLimit: bigint
	gasUsed: bigint
	hash: string
	logsBloom: string
	miner: string
	mixHash: string
	nonce: bigint
	number: bigint
	parentHash: string
	receiptsRoot: string
	sha3Uncles: string
	size: bigint
	stateRoot: string
	timestamp: bigint
	totalDifficulty: bigint
	transactions: string[]
	transactionsRoot: string
	uncles: string[]
}

export type TxDataType = {
	hash: string
	nonce: string
	blockHash: string
	blockNumber: string | undefined
	transactionIndex: string | undefined
	from: string
	to: string
	value: string
	gas: string
	gasPrice: string
	input: string
	timestamp?: string
}

export type DecodedParams = Record<string, string | bigint>

export type DecodedInputDataType = {
	methodName: string
	methodId: string
	params: DecodedParams
}

export type TxReceiptDataType = {
	blockHash: string
	blockNumber: bigint
	cumulativeGasUsed: bigint
	effectiveGasPrice: bigint
	from: string
	gasUsed: bigint
	logs: LogDataType[]
	logsBloom: string
	status: boolean | bigint
	to: string
	transactionHash: string
	transactionIndex: bigint
}

export type LogDataType = {
	address: string
	blockHash: string
	blockNumber: bigint
	data: string
	logIndex: bigint
	removed: boolean
	topics?: string[] | undefined
	transactionHash: string
	transactionIndex: bigint
}
