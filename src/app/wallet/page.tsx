'use client'

import React from 'react'

import { useAtom, useSetAtom } from 'jotai'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { ButtonCreateWallet } from '@/features/wallets/ButtonCreateWallet'
import { ButtonImportWalletByKey } from '@/features/wallets/ButtonImportWalletByKey'
import { ButtonImportWalletByMnemonic } from '@/features/wallets/ButtonImportWalletByMnemonic'
import { WalletContents } from '@/features/wallets/WalletContents'
import { txHashesAtom, web3WalletAtom } from '@/stores/atoms'

const WalletPage = () => {
	const [wallet, setWallet] = useAtom(web3WalletAtom)
	const setTxHashes = useSetAtom(txHashesAtom)

	const disconnect = () => {
		setWallet(null)
		setTxHashes([])
	}

	return (
		<div className='flex w-full flex-col items-center'>
			{!wallet ? (
				<div className='flex w-[60%] flex-col items-center gap-4'>
					<p className='py-4 text-2xl font-bold'>Blockchain wallets 🐱</p>
					<ButtonCreateWallet />
					OR
					<ButtonImportWalletByKey />
					OR
					<ButtonImportWalletByMnemonic />
					{/* OR
					<ButtonMetamaskWallet /> */}
				</div>
			) : (
				<div>
					<ButtonGoBack onClick={disconnect}>Prev Page</ButtonGoBack>
					<div className='mt-4 flex w-full flex-col items-center gap-8'>
						<WalletContents />
					</div>
				</div>
			)}
		</div>
	)
}

export default WalletPage
