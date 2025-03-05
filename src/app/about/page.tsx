import Image from 'next/image'

const AboutPage = () => {
	return (
		<div className='space-y-8'>
			<div className='fadeImage'>
				<Image
					src='https://aronlaszka.com/project/blockchain-security/featured_hu9b013cb8b00a8bf0950fc16f9e8a11d4_510266_720x0_resize_q90_lanczos.jpg'
					width={1000}
					height={1000}
					alt='blockchain-image'
				/>
			</div>

			<div className='space-y-2 pl-4'>
				<p className='font-bold'>👩🏻‍💻 Blockchain Engineering Student (Present)</p>
				<p>👩🏻‍💻 Frontend Developer (2021 - 2024, France & Remote)</p>
				<p>👩🏻‍🍳 Pastry Chef (2016–2021, Michelin-starred restaurants, 5-star hotels in France)</p>
				<p>👩🏻‍💻 UI/UX Designer (2013–2016, Japan)</p>
				<p>👩🏻‍🎓 Law Graduate (2009–2013, Bachelor&#39;s in International Law)</p>
			</div>

			<div className='border-b' />

			<div className='space-y-2 pl-4'>
				<p className='font-bold'>What I love are : </p>
				<p>Cats 🐈, Summer, Sun & Sea, Scuba Diving, Sea animals</p>
			</div>

			<div className='border-b' />

			<div className='space-y-2 pl-4'>
				<p className='font-bold'>Skills I have: </p>
				<p>ReactJS / NextJS / TypeScript / Styled Components / Tailwind CSS /</p>
				<p>Wagmi / Viem / Taquito / Tanstack Query / GraphQL / Axios NodeJS / ExpressJS / MongoDB / </p>
				<p>Cypress / Jest / (Little bit of) Vue & Nuxt ... (Soon) Solidity / Python</p>
			</div>
		</div>
	)
}

export default AboutPage
