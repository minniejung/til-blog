import { ReactNode } from 'react'

export type TilCardType = {
	id: number
	date: string
	tags: string[]
	title: string
	content: ReactNode
}

export type NetworkType = {
	id: bigint
	name: string
}
