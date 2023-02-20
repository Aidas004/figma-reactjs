import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {

	return (
		<div className='py-20 px-28 flex'>
			<div className='flex-1 flex flex-col justify-center items-start'>
				<h1 className='hero-h1'>Discover <br></br> digital art & Collect NFTs</h1>
				<p className='hero-p mt-5 tracking-wider'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
				<Link className='px-12 text-white py-5 mt-7 rounded-3xl flex items-center justify-center purple-button'>
					<img src='./src/assets/svg/rocket.svg' />
					<div className='ml-3'>Get Started</div></Link>
				<div className='mt-7 flex justify-between'>
					<div className='info-block'>
						<div style={{ fontSize: '28px', fontWeight: '700' }}>240k+</div>
						<div style={{ fontSize: '24px' }}>Total Sale</div>
					</div>
					<div className='info-block'>
						<div style={{ fontSize: '28px', fontWeight: '700' }}>100k++</div>
						<div style={{ fontSize: '24px' }}>Auctions</div>
					</div>
					<div className='info-block'>
						<div style={{ fontSize: '28px', fontWeight: '700' }}>240k+</div>
						<div style={{ fontSize: '24px' }}>Artists</div>
					</div>
				</div>
			</div>
			<div className='flex-1 flex justify-end'>
				<div className='text-white'>
					<img className='rounded-t-2xl' src='./src/assets/images/heroimage.svg' />
					<div className='bg-secondary py-6 px-5 rounded-b-2xl'>
						<div style={{ fontSize: '22x', fontWeight: '600' }}>Space Walking</div>
						<div className='flex mt-3'>
							<img className='mr-3' src='./src/assets/svg/profilemini.svg' />
							<div>Animakid</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeroSection