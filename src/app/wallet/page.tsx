'use client'

import React from 'react'

import { useAtom } from 'jotai'
import Web3 from 'web3'

import { ButtonGoBack } from '@/components/buttons/ButtonGoBack'
import { ButtonCreateWallet } from '@/components/wallets/ButtonCreateWallet'
import { ButtonImportWalletByKey } from '@/components/wallets/ButtonImportWalletByKey'
import { ButtonImportWalletByMnemonic } from '@/components/wallets/ButtonImportWalletByMnemonic'
// import { ButtonMetamaskWallet } from '@/components/wallets/ButtonMetamaskWallet'
import { WalletContents } from '@/components/wallets/WalletContents'
import { web3WalletAtom } from '@/stores/atoms'

const web3 = new Web3('https://public-en-kairos.node.kaia.io')

const WalletPage = () => {
	const [wallet, setWallet] = useAtom(web3WalletAtom)

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
					<ButtonGoBack onClick={() => setWallet(null)}>Prev Page</ButtonGoBack>
					<div className='flex w-full flex-col items-center gap-8'>
						<WalletContents web3={web3} />
					</div>
				</div>
			)}
		</div>
	)
}

export default WalletPage
