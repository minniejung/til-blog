import { ethers } from 'ethers'

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545') // Ganache

const senderPrivateKey = '0x8df0b339549d944e18b5b48de4ee95fbecf918c80210fadcc618f704797d1a20'
const signer = new ethers.Wallet(senderPrivateKey, provider)

export const sendETH = async (to: ethers.JsonRpcSigner, amount: string) => {
	try {
		// console.log(`from: ${signer.address}`)
		// console.log(`to: ${to}`)
		// console.log(`amount: ${amount} ETH`)

		const tx = await signer.sendTransaction({
			to,
			value: ethers.parseEther(amount),
		})

		// console.log(`hash: ${tx.hash}`)
		return tx.hash
	} catch (error) {
		console.error('error transferring ETH:', error)
		throw error
	}
}

export const testSendETH = async () => {
	try {
		const accounts = await provider.listAccounts()
		// console.log(
		// 	'accounts:',
		// 	accounts.map(acc => acc.address),
		// )

		const to = accounts[4] // to
		// console.log('to', to)
		const amount = '29'

		await sendETH(to, amount)
	} catch (error) {
		console.error('test failed:', error)
	}
}
