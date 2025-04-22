import { ReactNode } from 'react'

import { Address } from 'web3'

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

export type ContractDataType = {
	name?: string
	symbol?: string
	totalSupply?: string
	decimals?: number
	code: string
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

export type BlockTxDataType = {
	hash: string
	nonce: bigint
	blockHash: string
	blockNumber: number | undefined
	transactionIndex: number | undefined
	from: string | Address
	to: string | Address
	value: bigint
	gas: bigint
	gasPrice: bigint
	input: string
	timestamp?: string
}

export type TxDataType = {
	hash: string
	nonce: string
	blockHash: string
	blockNumber: number | undefined
	transactionIndex: number | undefined
	from: string | Address
	to: string | Address
	value: string
	gas: string
	gasPrice: string
	input: string
	timestamp?: string
}

export type DecodedParams = Record<string, string | bigint>

export type DecodedInputDataType = {
	status: string
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
