import { NetworkType } from './types/types'

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

export const ScobyNfts = [
	{
		id: 0,
		name: 'Scoby',
		uri: 'https://lavender-left-coyote-594.mypinata.cloud/ipfs/bafybeig7ow34ri2tzrnwr2n26gxdmml72au52h7r32zp6cw7j6w4segkdu',
	},
	{
		id: 1,
		name: 'Scoby',
		uri: 'https://lavender-left-coyote-594.mypinata.cloud/ipfs/bafybeib7mwi2qzwl3go7kz526yaoxo3dsz2373tntlxjwyq6iuqkp2ub3a',
	},
	{
		id: 2,
		name: 'Scoby',
		uri: 'https://lavender-left-coyote-594.mypinata.cloud/ipfs/bafybeifp43auc46gglga47rlgq57lo3tcuvyo5sqkixw7kty5narrwk44e',
	},
]
