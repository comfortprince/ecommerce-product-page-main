import { useState } from 'react'

import { avatar } from '../../data/Constants'
import navLinks from '../../data/navLinks'
import products from '../../data/products'

import Avatar from './Avatar'
import HarmburgerBtn from './HarmburgerBtn'
import CartBtn from './CartBtn'
import Cart from './Cart'
import Logo from './Logo'
import Nav from './Nav'
import SideBar from './SideBar'
import ProductCarousel from './ProductCarousel'
import ProductDetails from './ProductDetails'

export default function Home() {
	const [cartVisibility, setCartVisibility] = useState(false)
	const [sideBarVisibility, setSideBarVisibility] = useState(false)
	const selectedProducts = [{
		"id": products[0].id,
		"quantity": 3
	}]

	return(
		<>
			<header 
				className="
					max-md:px-4 max-md:py-4 md:mx-16 lg:mx-32
					flex relative
					border-b-2 border-light-grayish-blue
				"
			>
				<div
					className="flex justify-between gap-6 md:gap-12"
				>
					<HarmburgerBtn toggleSideBar={() => {setSideBarVisibility(true)}}/>
					<Logo/>
					<Nav navLinks={navLinks}/>
				</div>
				<div 
					className="
						flex gap-8 justify-end flex-grow
					"
				>
					<CartBtn 
						numOfItemsInCart={"2"}
						openCart={() => {setCartVisibility(true)}}
					/>
					<Avatar avatar={avatar}/>	
				</div>
				<Cart 
					selectedProducts={selectedProducts}
					availableProducts={products}
					cartVisibility={cartVisibility}
					closeCart={() => {setCartVisibility(false)}}
				/>
				<SideBar 
					navLinks={navLinks}
					sideBarVisibility={sideBarVisibility}
					closeSideBar={() => {setSideBarVisibility(false)}}
				/>
			</header>
			<main>
				<section
					className="
						md:flex justify-between gap-4
						md:px-16 md:py-12 lg:mx-32
					"
				>
					<ProductCarousel productImgs={products[0].imgs}/>
					<ProductDetails product={products[0]}/>
				</section>
			</main>
		</>
	)
}