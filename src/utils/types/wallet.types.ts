import { BrowserProvider, JsonRpcSigner } from 'ethers'

export type MetaMaskAccount = {
	address: string
	provider: BrowserProvider
	signer: JsonRpcSigner
	isMetaMask: true
}
