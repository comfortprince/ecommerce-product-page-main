import { avatar } from '../../data/Constants'
import navLinks from '../../data/navLinks'
import products from '../../data/products'

import Avatar from './Avatar'
import HarmburgerBtn from './HarmburgerBtn'
import CartBtn from './CartBtn'
import Logo from './Logo'
import Nav from './Nav'
import ProductCarousel from './ProductCarousel'

export default function Home() {
	return(
		<>
			<header 
				className="
					max-md:px-4 max-md:py-4 md:mx-16 lg:mx-32
					flex
					border-b-2 border-light-grayish-blue
				"
			>
				<div
					className="flex justify-between gap-6 md:gap-12"
				>
					<HarmburgerBtn />
					<Logo/>
					<Nav navLinks={navLinks}/>
				</div>
				<div 
					className="
						flex gap-8 justify-end flex-grow
					"
				>
					<CartBtn numOfItemsInCart={"2"}/>
					<Avatar avatar={avatar}/>	
				</div>
			</header>
			<main>
				<section
					className="
						flex
						md:px-16 md:py-12 lg:mx-32
					"
				>
					<ProductCarousel productImgs={products[0].imgs}/>
					<ProductDetails/>
				</section>
			</main>
		</>
	)
}

function ProductDetails() {
	// body...
}