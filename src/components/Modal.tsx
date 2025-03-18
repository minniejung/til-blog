'use client'

import React, { useRef } from 'react'

import { motion } from 'framer-motion'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement | null>(null)

	if (!isOpen) return null

	return (
		<div
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
			onClick={e => {
				if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
					onClose()
				}
			}}
			onKeyDown={e => e.key === 'Escape' && onClose()}
			tabIndex={-1}>
			<motion.div
				ref={modalRef}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.9 }}
				className='flex w-full max-w-[500px] flex-col gap-5 rounded-lg bg-white p-6 shadow-lg'>
				{children}
			</motion.div>
		</div>
	)
}
