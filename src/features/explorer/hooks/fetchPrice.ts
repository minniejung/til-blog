import { useEffect, useState } from 'react'

const usePOLPrice = () => {
	const [price, setPrice] = useState<{ usd: number; btc: number } | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchPOLPrice = async () => {
			try {
				const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=polygon&vs_currencies=usd,btc')
				const data = await res.json()
				setPrice(data.polygon)
			} catch (err) {
				setError('Failed to fetch POL price' + err)
			} finally {
				setLoading(false)
			}
		}

		fetchPOLPrice()
	}, [])

	return { price, loading, error }
}

export default usePOLPrice
