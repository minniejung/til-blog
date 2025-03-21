import React from 'react'

import { motion } from 'framer-motion'

export const LoadingMessage = ({ msg }: { msg: string }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}>
			{msg}
		</motion.div>
	)
}
