'use client'

import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { ERC20_ABI } from '@/utils/abi/ERC20_ABI'
import { ContractDataType } from '@/utils/types/types'

const web3 = new Web3(process.env.NEXT_PUBLIC_WEB3_RPC)

const useContractChecker = (address: string) => {
	const [isContract, setIsContract] = useState<boolean | null>(null)
	const [code, setCode] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [contractData, setContractData] = useState<ContractDataType | null>(null)

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

					const name = (await contract.methods.name().call()) as string
					const symbol = (await contract.methods.symbol().call()) as string
					const decimals = (await contract.methods.decimals().call()) as string
					const totalSupply = (await contract.methods.totalSupply().call()) as string

					setContractData({
						name,
						symbol,
						decimals: Number(decimals),
						totalSupply: web3.utils.fromWei(totalSupply, 'ether'),
						code: contractCode,
					})
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error')
			} finally {
				const delay = (ms: number) => new Promise(res => setTimeout(res, ms))
				await delay(2000)
				setLoading(false)
			}
		}

		checkContract()
	}, [address])

	return { isContract, code, contractData, loading, error }
}

export default useContractChecker
