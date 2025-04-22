export type Timage = {
	url: string
	preview: string | null
}

export type Tmetadata = {
	name: string
	description: string
	image: string
}

export type Taccount = {
	address: string
	privateKey: string
}

export type Tnft = {
	tokenId: number
	owner: string
	contract: string
	tokenURI: string
	network: string
	name: string
	image: string
	description: string
	symbol: void | [] | (unknown[] & [])
}
