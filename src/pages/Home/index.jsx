import { useState } from 'react'

import { avatar } from '../../data/Constants'
import navLinks from '../../data/navLinks'
import products from '../../data/products'

import Avatar from '../../components/Commons/Avatar'
import HarmburgerBtn from '../../components/SideBar/HarmburgerBtn'
import CartBtn from '../../components/Cart/CartBtn'
import Cart from '../../components/Cart/Cart'
import Logo from '../../components/Commons/Logo'
import Nav from '../../components/Commons/Nav'
import SideBar from '../../components/SideBar/SideBar'

import ProductCarousel from './ProductCarousel'
import ProductDetails from './ProductDetails'

export default function Home() {
	const [cartVisibility, setCartVisibility] = useState(false)
	const [sideBarVisibility, setSideBarVisibility] = useState(false)
	const [productsInCart, setProductsInCart] = useState([])

	return(
		<>
			<header 
				className="
					max-w-[1440px]
					max-md:px-4 max-md:py-4 md:mx-16 lg:mx-32
					flex sticky top-0 bg-white z-10
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
						productsInCart={productsInCart}
						openCart={() => {setCartVisibility(true)}}
					/>
					<Avatar avatar={avatar}/>	
				</div>
				<Cart 
					productsInCart={productsInCart}
					setProductsInCart={setProductsInCart}
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
			<main className="max-w-[1440px]">
				<section
					className="
						md:flex justify-between gap-4
						md:px-16 md:py-12 lg:mx-32
					"
				>
					<ProductCarousel productImgs={products[0].imgs}/>
					<ProductDetails 
						product={products[0]} 
						productsInCart={productsInCart}
						setProductsInCart={setProductsInCart}
					/>
				</section>
			</main>
		</>
	)
}