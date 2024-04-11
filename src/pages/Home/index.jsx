import { useState } from 'react'

import { avatar } from '../../data/Constants'
import navLinks from '../../data/navLinks'
import products from '../../data/products'

import Avatar from './Avatar'
import HarmburgerBtn from './HarmburgerBtn'
import CartBtn from './CartBtn'
import Logo from './Logo'
import Nav from './Nav'

export default function Home() {
	console.log(products[0].imgs)

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
						md:mx-16 md:py-12 lg:mx-32
					"
				>
					<ProductCarousel productImgs={products[0].imgs}/>
					<ProductDetails/>
				</section>
			</main>
		</>
	)
}

function ProductCarousel({productImgs=[]}) {
	const [activeImg, setActiveImg] = useState(0)

	return(
		<div
			className="
				md:w-1/2 flex flex-col items-center
			"
		>
			{productImgs.map((productImg, ndx) => (
				<img 
					key={ndx} 
					src={productImg.img} 
					alt="product"
					width={450}
					height={'auto'}
					className={`
						${ndx !== activeImg ? 'hidden' : ''}
						md:rounded-md max-md:w-full
					`}
				/>
			))}
			<ul className="flex gap-7 mt-7 max-md:hidden">
				{productImgs.map((productImg, ndx)=>(
					<li
						key={ndx}
						className="relative"
						onClick={()=>{setActiveImg(ndx)}}
					>
						<img  
							src={productImg.thumbnail} 
							alt="product thumbnail"
							width={90}
							height={'auto'}
							className={`
								rounded-lg
								bg-black
 							`}
						/>
						<span 
							className={`
								${ndx === activeImg ? 
									'bg-opacity-70' : 
									'bg-opacity-0 hover:bg-opacity-40 border-opacity-0'
								}
								w-full h-full rounded-lg
								bg-light-grayish-blue 
								absolute top-0 border-2 border-orange
								transition-all duration-300 cursor-pointer
							`}
						></span>
					</li>
				))}
			</ul>
		</div>
	)
}

function ProductDetails() {
	// body...
}