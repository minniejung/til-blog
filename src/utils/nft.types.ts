export type Timage = {
	url: string
	preview: string | null
}

export type Tmetadata = {
	name: string
	discription: string
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
	discription: string
	symbol: void | [] | (unknown[] & [])
}
