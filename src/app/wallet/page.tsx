'use client'

import React from 'react'

// import { MetamaskWallet } from '@/components/wallets/MetamaskWallet'
import { CreateWallet } from '@/components/wallets/CreateWallet'
// import { ImportWallet } from '@/components/wallets/ImportWallet'

const WalletPage = () => {
	return (
		<div className='flex w-full flex-col items-center gap-8'>
			<p className='text-2xl font-bold'>🐱 Blockchain wallets</p>

			{/* <MetamaskWallet /> */}
			{/* <ImportWallet /> */}
			<CreateWallet />
		</div>
	)
}

export default WalletPage
