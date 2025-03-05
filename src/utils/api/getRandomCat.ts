export const getRandomCats = async () => {
	try {
		const res = await fetch('https://cataas.com/api/cats?limit=50&skip=0')

		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`)
		}

		const data = await res.json()
		return data
	} catch (error) {
		console.error('Error fetching cats:', error)
		return []
	}
}
