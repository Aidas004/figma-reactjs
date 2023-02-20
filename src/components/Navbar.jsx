import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
	return (
		<div className='w-full h-24 py-5 px-12 flex items-center justify-between text-white'>
			<Link to='/' className='flex items-center'>
				<img src='./src/assets/svg/logo.svg' />
			</Link>
			<div className='flex font-sans'>
				<Link className='px-5 py-3 flex items-center justify-center' to='/marketplace'>Marketplace</Link>
				<Link className='px-5 py-3 flex items-center justify-center' to='/markings'>Markings</Link>
				<Link className='px-5 py-3 flex items-center justify-center' to='/connect'>Connect a wallet</Link>
				<Link className='px-5 py-3 rounded-2xl flex items-center justify-center purple-button'>
					<img src='./src/assets/svg/signup.svg' />
					<div className='ml-3'>Sign Up</div></Link>
			</div>

		</div>
	)
}