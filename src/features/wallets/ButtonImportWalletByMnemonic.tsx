'use client'

import React, { ClipboardEvent, useState } from 'react'

import { HDKey } from '@scure/bip32'
import { mnemonicToSeedSync, validateMnemonic } from '@scure/bip39'
import { wordlist } from '@scure/bip39/wordlists/english'
import { useSetAtom } from 'jotai'
import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import Web3 from 'web3'

import Button from '@/components/buttons/Button'
import { Modal } from '@/components/Modal'
import { web3WalletAtom } from '@/stores/atoms'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

export const ButtonImportWalletByMnemonic = () => {
	const setWallet = useSetAtom(web3WalletAtom)

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [mnemonicWords, setMnemonicWords] = useState<string[]>(Array(12).fill(''))

	const handleInputChange = (index: number, value: string) => {
		const updatedMnemonic = [...mnemonicWords]
		updatedMnemonic[index] = value.trim()
		setMnemonicWords(updatedMnemonic)
	}

	const handlePaste = (event: ClipboardEvent<HTMLInputElement>, index: number) => {
		event.preventDefault()
		const pastedText = event.clipboardData.getData('text').trim()
		const words = pastedText.split(/\s+/)

		if (words.length === 12) {
			setMnemonicWords(words)
		} else if (words.length === 1) {
			handleInputChange(index, words[0])
		} else {
			toast.error('Mnemonic must be exactly 12 words.')
		}
	}

	const importWallet = async () => {
		const mnemonic = mnemonicWords.join(' ').trim()

		if (!validateMnemonic(mnemonic, wordlist)) {
			toast.error('Invalid mnemonic phrase!')
			return
		}

		try {
			const seed = mnemonicToSeedSync(mnemonic)
			const hdwallet = HDKey.fromMasterSeed(seed)
			const walletNode = hdwallet.derive("m/44'/60'/0'/0/0")

			if (!walletNode.privateKey) {
				throw new Error('Failed to derive wallet')
			}

			const privateKeyHex = `0x${Buffer.from(walletNode.privateKey).toString('hex')}`
			const account = web3.eth.accounts.privateKeyToAccount(privateKeyHex)
			setWallet(account)
			setIsModalOpen(false)
		} catch (error) {
			console.error(error)
			toast.error('Error importing wallet')
		}
	}

	return (
		<div className='flex w-full flex-col justify-center gap-4'>
			<Button
				onClick={() => setIsModalOpen(true)}
				className='flex flex-row items-center gap-2 hover:border-purple-300 hover:bg-purple-50'>
				<IoWalletOutline />
				Import Wallet with Mnemonic
			</Button>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<p className='flex flex-row items-center gap-2 text-lg font-semibold'>
					<IoWalletOutline />
					Import Wallet with Mnemonic
				</p>
				<div className='grid grid-cols-3 gap-2'>
					{mnemonicWords.map((word, index) => (
						<input
							key={index}
							type='text'
							value={word}
							onChange={e => handleInputChange(index, e.target.value)}
							onPaste={e => handlePaste(e, index)}
							className='w-full rounded-lg border border-gray-400 p-2 text-center'
							placeholder={`${index + 1}`}
						/>
					))}
				</div>

				<div className='flex w-full justify-end gap-2'>
					<Button onClick={() => setIsModalOpen(false)} className='w-[30%] bg-gray-100 hover:bg-gray-200'>
						Cancel
					</Button>
					<Button
						onClick={importWallet}
						className='w-full border-transparent bg-purple-500 text-white hover:bg-purple-600'>
						Import
					</Button>
				</div>
			</Modal>
		</div>
	)
}
