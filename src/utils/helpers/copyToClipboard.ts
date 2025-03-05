import { toast } from 'react-toastify'

export const copyToClipboard = (content: string | HTMLElement) => {
	if (!content) {
		toast.error('Nothing to copy.')
		return
	}

	let textToCopy = ''

	if (typeof content === 'string') {
		textToCopy = content
	} else if (content instanceof HTMLElement) {
		textToCopy = content.innerText || ''
	}

	if (textToCopy) {
		navigator.clipboard.writeText(textToCopy).then(
			() => toast.success('Copied to clipboard!'),
			err => {
				toast.error('Failed to copy.')
				console.error('Copy error:', err)
			},
		)
	} else {
		toast.error('No text found.')
	}
}