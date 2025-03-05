export const getARandomCat = async (): Promise<string> => {
	const url = `https://cataas.com/cat?json=true`

	try {
		const res = await fetch(url)
		if (!res.ok) throw new Error('Failed to fetch cat image')

		const data = await res.json()
		if (!data || !data.url) throw new Error('Invalid response')

		return `https://cataas.com${data.url}`
	} catch (error) {
		console.error('Error fetching cat image:', error)
		throw error
	}
}
