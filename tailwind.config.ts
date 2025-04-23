import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/features/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'2xl': '1680px',
			xl: '1440px',
			lg: '1280px',
			md: '1024px',
			sm: '768px',
			xs: '640px',
		},
		extend: {
			fontFamily: {
				dancing: ['Dancing Script', 'sans-serif'],
				moncerrate: ['Montserrat', 'sans-serif'],
				baloo: ['Baloo 2', 'sans-serif'],
			},
			colors: {
				primary: '#ffffff',
				secondary: '#212121',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				marquee: 'marquee 10s linear infinite',
			},
		},
	},
	plugins: [],
} satisfies Config
