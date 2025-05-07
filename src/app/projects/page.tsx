'use client'

import { ProjectCard } from '@/components/ProjectCard'

import ImageExplorer from '../../assets/proj-explorer.jpeg'
import ImageMetaTx from '../../assets/proj-metatx.jpeg'
import ImageNftTx from '../../assets/proj-nft.jpeg'
import ImageWallet from '../../assets/proj-wallet.jpeg'

const ProjectPage = () => {
	return (
		<>
			<p className='mb-8 text-2xl font-bold'>Projects (WIP)</p>

			<div className='grid gap-4'>
				<ProjectCard
					title='Meta Transaction'
					newPage
					path='https://attendance-meow.vercel.app/home'
					img={ImageMetaTx}
					description='[MOCK] A Web3 platform powered by a smart contract and meta-transactions, where users earn MEOW tokens by attending or liking posts and spend one token to comment — all without paying gas fees.'
					tags='#Solidity, #ERC20, #ERC2771Context, #MetaTransaction, #GasLess'
				/>
				<ProjectCard
					title='Mint Page'
					newPage
					path='https://mint-scob.vercel.app/mint'
					img={ImageNftTx}
					description='[Mock] A minting page of Scoby NFTs'
					tags='#Solidity, #ERC721 #Pinata #IPFS'
				/>
				<ProjectCard
					title='Explorer'
					path='explorer'
					img={ImageExplorer}
					description='[Mock] A simple explorer — check with Tx hash, EOA, contract address, or block number'
				/>
				<ProjectCard
					title='Wallet'
					path='wallet'
					img={ImageWallet}
					description='[Mock] A custom wallet where you can create and transfer tokens'
					tags='#Faucet #Mnemonic #PrivateKey #RandomWallet'
				/>
			</div>
		</>
	)
}

export default ProjectPage
