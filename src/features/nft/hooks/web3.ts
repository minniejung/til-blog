import axios from 'axios'
import Web3 from 'web3'

import MyNFT from '@/utils/abi/MyNFT.json'
import { Taccount } from '@/utils/types/nft.types'
import { MetaMaskAccount } from '@/utils/types/wallet.types'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const contract = new web3.eth.Contract(MyNFT.abi, MyNFT.address)

export const mint = async (account: Taccount, tokenURI: string) => {
	try {
		const gas = await contract.methods.mint(account.address, tokenURI).estimateGas({ from: account.address })
		const gasPrice = await web3.eth.getGasPrice()
		const nonce = await web3.eth.getTransactionCount(account.address, 'latest')

		const tx = {
			from: account.address,
			to: contract.options.address,
			gas: web3.utils.toHex(gas),
			gasPrice: web3.utils.toHex(gasPrice),
			nonce: web3.utils.toHex(nonce),
			data: contract.methods.mint(account.address, tokenURI).encodeABI(),
		}

		const signedTx = await web3.eth.accounts.signTransaction(tx, account.privateKey)

		const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction as string)
		console.log('receipt', receipt)
		return receipt
	} catch (error) {
		console.error('❌ 트랜잭션 실패:', error)
	}
}

const getMetadata = async (tokenURI: string) => {
	try {
		const response = await axios.get(tokenURI)
		return response.data
	} catch (error) {
		console.error(error)
	}
}

export const getNfts = async (address: string) => {
	const nfts = []

	try {
		const totalSupply = Number(await contract.methods.totalSupply().call())

		for (let i = 0; i <= totalSupply; i++) {
			try {
				const owner: string | null | undefined = await contract.methods.ownerOf(i).call()

				if (owner && typeof owner === 'string' && owner.toLowerCase() === address.toLowerCase()) {
					const tokenURI: string = (await contract.methods.tokenURI(i).call()) || ''
					const metadata = await getMetadata(tokenURI)

					const nft = {
						tokenId: i,
						owner,
						contract: MyNFT.address,
						tokenURI,
						network: 'Kaia testnet',
						name: metadata.name,
						image: metadata.image,
						description: metadata.description,
						symbol: await contract.methods.symbol().call(),
					}

					nfts.push(nft)
				}
			} catch (error) {
				console.error(error)
				continue
			}
		}

		return nfts
	} catch (error) {
		console.error('Error in getNfts:', error)
		return []
	}
}
