'use client'

import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { ERC20_ABI } from '@/utils/abi/ERC20_ABI'

const web3 = new Web3('https://polygon-rpc.com')

// 클릭하면 link
// 실패한 원인 찾기

const useContractChecker = (address: string) => {
	const [isContract, setIsContract] = useState<boolean | null>(null)
	const [code, setCode] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [contractData, setContractData] = useState<{
		name?: string
		symbol?: string
		totalSupply?: string
		decimals?: number
		code: string
	}>({})

	useEffect(() => {
		const checkContract = async () => {
			try {
				if (!web3.utils.isAddress(address)) {
					throw new Error('Invalid Ethereum address')
				}

				const contractCode = await web3.eth.getCode(address)

				if (contractCode === '0x') {
					setIsContract(false) // EOA
				} else {
					setIsContract(true) // Smart Contract
					setCode(contractCode)

					const contract = new web3.eth.Contract(ERC20_ABI, address)

					const [name, symbol, decimals, totalSupply] = await Promise.all([
						contract.methods.name().call(),
						contract.methods.symbol().call(),
						contract.methods.decimals().call(),
						contract.methods.totalSupply().call(),
					])

					setContractData({
						name,
						symbol,
						decimals: Number(decimals),
						totalSupply: web3.utils.fromWei(totalSupply, 'ether'),
						contractCode,
					})
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				setLoading(false)
			}
		}

		checkContract()
	}, [address])

	return { isContract, code, contractData, loading, error }
}

export default useContractChecker
