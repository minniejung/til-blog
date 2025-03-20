'use client'

import { useEffect, useState } from 'react'

import Web3 from 'web3'

import { TxDataType, TxReceiptDataType } from '@/utils/types'

const web3 = new Web3('https://polygon-rpc.com')

const useTxData = (txHash: string) => {
	const [transaction, setTransaction] = useState<TxDataType | null>(null)
	const [receipt, setReceipt] = useState<TxReceiptDataType | null>(null)
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [status, setStatus] = useState<string | null>(null)
	const [failureReason, setFailureReason] = useState<string | null>(null)

	useEffect(() => {
		const fetchTransaction = async () => {
			if (!txHash || !web3.utils.isHexStrict(txHash)) {
				setError('Invalid transaction hash')
				setLoading(false)
				return
			}

			try {
				setLoading(true)

				// Fetch transaction data
				const txData = (await web3.eth.getTransaction(txHash)) as TxDataType
				if (!txData) {
					setError('Transaction not found')
					return
				}

				setTransaction(txData)

				const txReceipt = (await web3.eth.getTransactionReceipt(txHash)) as TxReceiptDataType
				if (txReceipt) {
					console.log('txReceipt', txReceipt)
					setReceipt(txReceipt)
					setStatus(txReceipt.status ? 'success' : 'failed')

					if (!txReceipt.status) {
						setFailureReason('Execution Reverted or Out of Gas')
					}
				} else {
					setError('Transaction receipt not found')
				}
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error occurred')
			} finally {
				setLoading(false)
			}
		}

		fetchTransaction()
	}, [txHash])

	return { transaction, receipt, status, failureReason, loading, error }
}

export default useTxData
