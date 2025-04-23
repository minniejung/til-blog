import { BrowserProvider, JsonRpcSigner } from 'ethers'

export type MetaMaskAccountType = {
	address: string
	provider: BrowserProvider
	signer: JsonRpcSigner
	isMetaMask: true
}
