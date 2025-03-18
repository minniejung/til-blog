'use client'

import React, { useState } from 'react'

import { useSetAtom } from 'jotai'
import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import Button from '@/components/buttons/Button'
import { web3WalletAtom } from '@/stores/atoms'

import { Modal } from '../Modal'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const ButtonImportWalletByKey = () => {
	const setWallet = useSetAtom(web3WalletAtom)

	const [privateKey, setPrivateKey] = useState<string>('')
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const getAccountByPrivateKey = async () => {
		try {
			const account = web3.eth.accounts.privateKeyToAccount(privateKey)
			setWallet(account)
			setPrivateKey('')
			setIsModalOpen(false)

			toast.success('Wallet imported successfully!')
		} catch (error) {
			toast.error('Invalid private key!')
			console.error('Error importing wallet:', error)
		}
	}

	return (
		<div className='flex w-full flex-col justify-center gap-4'>
			<Button
				onClick={() => setIsModalOpen(true)}
				className='flex flex-row items-center gap-2 hover:border-purple-300 hover:bg-purple-50'>
				<IoWalletOutline />
				Import Wallet with Private Key
			</Button>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<p className='flex flex-row items-center gap-2 text-lg font-semibold'>
					<IoWalletOutline />
					Import Wallet with Private Key
				</p>

				<input
					type='text'
					placeholder='Enter Private Key'
					value={privateKey}
					onChange={e => setPrivateKey(e.target.value)}
					className='w-full rounded-lg border border-gray-300 p-3'
				/>
				
				<div className='flex w-full justify-end gap-2'>
					<Button onClick={() => setIsModalOpen(false)} className='w-[30%] bg-gray-100 hover:bg-gray-200'>
						Cancel
					</Button>
					<Button
						onClick={getAccountByPrivateKey}
						className='w-full border-transparent bg-purple-500 text-white hover:bg-purple-600'>
						Import
					</Button>
				</div>
			</Modal>
		</div>
	)
}
