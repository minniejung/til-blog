import Web3 from 'web3'

const web3 = new Web3('http://127.0.0.1:7545') // Ganache

export const sendETH = async (from: string, to: string, amount: string) => {
	try {
		// console.log(`from: ${from}`)
		// console.log(`to: ${to}`)
		// console.log(`amount: ${amount} ETH`)

		const tx = await web3.eth.sendTransaction({
			from,
			to,
			value: web3.utils.toWei(amount, 'ether'),
		})

		// console.log(`tx hash: ${tx.transactionHash}`)
		return tx.transactionHash
	} catch (error) {
		console.error('error transferring ETH:', error)
		throw error
	}
}

export const testSendETH = async () => {
	try {
		const accounts = await web3.eth.getAccounts()
		// console.log('accounts', accounts)

		const from = accounts[0]
		const to = accounts[1]
		const amount = '5'

		await sendETH(from, to, amount)
	} catch (error) {
		console.error('test failed:', error)
	}
}
