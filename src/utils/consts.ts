import { NetworkType } from './types'

export const defaultNetwork = {
	id: 1001,
	name: 'Kaia Kairos Testnet',
	currency: 'KAIA',
	rpcUrl: 'https://public-en-kairos.node.kaia.io',
}

export const networks: NetworkType[] = [
	{ id: 1, name: 'Ethereum Mainnet', currency: 'ETH', rpcUrl: 'https://mainnet.infura.io' },
	{ id: 137, name: 'Polygon Mainnet', currency: 'POL', rpcUrl: 'https://polygon-rpc.com' },
	{ id: 80002, name: 'Polygon Amoy Testnet', currency: 'POL', rpcUrl: 'https://rpc-amoy.polygon.technology' },
	{ id: 1001, name: 'Kaia Kairos Testnet', currency: 'KAIA', rpcUrl: 'https://public-en-kairos.node.kaia.io' },
	{ id: 56, name: 'BNB Smart Chain', currency: 'BNB', rpcUrl: 'https://bsc-dataseed.binance.org' },
]
