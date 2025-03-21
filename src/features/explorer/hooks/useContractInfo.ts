// import { useEffect, useState } from 'react'

// import Web3 from 'web3'

// const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

// const useContractInfo = (contractAddress: string, userAddress?: string) => {
// 	const [isContract, setIsContract] = useState<boolean | null>(null)
// 	const [contractType, setContractType] = useState<string>('Unknown')
// 	const [name, setName] = useState<string | null>(null)
// 	const [symbol, setSymbol] = useState<string | null>(null)
// 	const [decimals, setDecimals] = useState<number | null>(null)
// 	const [balance, setBalance] = useState<string | null>(null)
// 	const [deployer, setDeployer] = useState<string | null>(null)
// 	const [proxyImplementation, setProxyImplementation] = useState<string | null>(null)
// 	const [loading, setLoading] = useState<boolean>(true)
// 	const [error, setError] = useState<string | null>(null)

// 	useEffect(() => {
// 		const checkContract = async () => {
// 			setLoading(true)
// 			setError(null)

// 			try {
// 				if (!web3.utils.isAddress(contractAddress)) {
// 					throw new Error('Invalid Ethereum address')
// 				}

// 				const contractCode = await web3.eth.getCode(contractAddress)

// 				if (contractCode === '0x') {
// 					setIsContract(false) // EOA
// 					return
// 				}

// 				setIsContract(true) // Smart Contract

// 				const contract = new web3.eth.Contract([], contractAddress)

// 				try {
// 					// Try to get ERC-20 details
// 					const contractName = await contract.methods.name().call()
// 					const contractSymbol = await contract.methods.symbol().call()
// 					const contractDecimals = await contract.methods.decimals().call()

// 					setName(contractName)
// 					setSymbol(contractSymbol)
// 					setDecimals(parseInt(contractDecimals))

// 					setContractType('ERC-20 Token')
// 				} catch {
// 					try {
// 						// Try to detect ERC-721 (NFT) by checking `ownerOf()`
// 						await contract.methods.ownerOf(1).call()
// 						setContractType('ERC-721 NFT')
// 					} catch {
// 						setContractType('Unknown or Not a Token')
// 					}
// 				}

// 				// Fetch balance if it's an ERC-20
// 				if (userAddress) {
// 					try {
// 						const tokenBalance = await contract.methods.balanceOf(userAddress).call()
// 						setBalance(web3.utils.fromWei(tokenBalance, 'ether'))
// 					} catch {
// 						setBalance(null)
// 					}
// 				}

// 				// Fetch contract deployer address
// 				const deployerAddress = await getDeployer(contractAddress)
// 				setDeployer(deployerAddress)

// 				// Check if contract is a proxy
// 				const proxyAddress = await detectProxyContract(contractAddress)
// 				setProxyImplementation(proxyAddress)
// 			} catch (err) {
// 				setError(err instanceof Error ? err.message : 'Unknown error')
// 			} finally {
// 				setLoading(false)
// 			}
// 		}

// 		checkContract()
// 	}, [contractAddress, userAddress])

// 	return {
// 		isContract,
// 		contractType,
// 		name,
// 		symbol,
// 		decimals,
// 		balance,
// 		deployer,
// 		proxyImplementation,
// 		loading,
// 		error,
// 	}
// }

// export default useContractInfo

// /**
//  * Detects if a contract is a proxy by checking EIP-1967 storage slots.
//  */
// const detectProxyContract = async (address: string) => {
// 	const PROXY_IMPLEMENTATION_SLOT = '0x360894A13BA1A3210667C828492DB98DCA3E2076CC3735A920A3CA505D382BBC' // EIP-1967 slot

// 	try {
// 		const implementationAddress = await web3.eth.getStorageAt(address, PROXY_IMPLEMENTATION_SLOT)
// 		if (implementationAddress !== '0x' && implementationAddress !== '0x0000000000000000000000000000000000000000') {
// 			return web3.utils.toChecksumAddress('0x' + implementationAddress.slice(26)) // Extract actual address
// 		}
// 		return null
// 	} catch (error) {
// 		console.error('Error detecting proxy:', error)
// 		return null
// 	}
// }

// /**
//  * Retrieves the deployer of a smart contract by analyzing its first transaction.
//  */
// const getDeployer = async (contractAddress: string) => {
// 	try {
// 		const txCount = await web3.eth.getTransactionCount(contractAddress)
// 		if (txCount > 0) {
// 			const tx = await web3.eth.getTransactionFromBlock(1, Number(txCount) - 1)
// 			return tx?.from || 'Unknown'
// 		}
// 		return 'Unknown'
// 	} catch (error) {
// 		console.error('Error fetching deployer:', error)
// 		return 'Unknown'
// 	}
// }
