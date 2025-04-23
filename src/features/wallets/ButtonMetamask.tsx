import { BrowserProvider } from 'ethers'
import { useSetAtom } from 'jotai'
import { IoWalletOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

import Button from '@/components/buttons/Button'
import { ethersWalletAtom } from '@/stores/atoms'

export const ButtonMetamaskWallet = () => {
	const setWallet = useSetAtom(ethersWalletAtom)

	const connectMetamask = async () => {
		if (typeof window === 'undefined' || typeof window.ethereum === 'undefined') {
			toast.error('Metamask not found')
			return
		}

		try {
			await window.ethereum.request({ method: 'eth_requestAccounts' })

			const provider = new BrowserProvider(window.ethereum)
			const signer = await provider.getSigner()

			const account = {
				address: await signer.getAddress(),
				provider,
				signer,
				isMetaMask: true as const,
			}

			setWallet(account)
			toast.success('Metamask wallet connected!')
		} catch (err) {
			console.error(err)
			toast.error('Failed to connect Metamask')
		}
	}

	return (
		<Button
			onClick={connectMetamask}
			className='flex flex-row items-center gap-2 hover:border-purple-300 hover:bg-purple-50'>
			<IoWalletOutline />
			Connect with Metamask
		</Button>
	)
}
