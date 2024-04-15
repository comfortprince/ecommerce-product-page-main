import { useEffect, useRef } from 'react'

import PrimaryBtn from '../Commons/PrimaryBtn'
import RemoveBtn from './RemoveBtn'

export default function Cart({
	productsInCart,
	setProductsInCart,
	availableProducts,
	cartVisibility,
	closeCart
}) {
	const cartRef = useRef(null)
	const backdropRef = useRef(null)

	useEffect(() => {
		const CART_OFFSET = 90

		const timings = {
			duration: 300,
			iterations: 1,
			fill: 'forwards',
			easing: 'ease-in-out'
		}

		const slideOut = [{
			top: ''
		},{
			top: `-${cartRef.current.clientHeight}px`
		}]

		const slideIn = [{
			top: ''
		},{
			top: `${CART_OFFSET}px`
		}]

		const fadeIn = [{
			backgroundColor: 'rgba(0,0,0,0)'
		},{
			backgroundColor: 'rgba(0,0,0,0.7)'
		}]
		const fadeOut = [{
			backgroundColor: 'rgba(0,0,0,0.7)'
		},{
			backgroundColor: 'rgba(0,0,0,0)'
		}]

		if(cartVisibility){
			// slide cart in
			cartRef.current.classList.remove('hidden')
			cartRef.current.animate(slideIn,timings)

			// fade in backdrop
			backdropRef.current.classList.add('block')
			backdropRef.current.classList.remove('hidden')
			backdropRef.current.animate(fadeIn, timings)
		} else {
			// slide cart out
			cartRef.current.animate(slideOut,timings)
		
			// fade out backdrop
			backdropRef.current.animate(fadeOut, timings)
			setTimeout(()=>{
				backdropRef.current.classList.remove('block')
				backdropRef.current.classList.add('hidden')
				cartRef.current.classList.add('hidden')
			}, timings.duration)
		}
	}, [cartVisibility])	

	const deleteProduct = productId => {
		setProductsInCart(productsInCart.filter(productInCart => productInCart.id === productId))
	}

	return (
		<>
			{/*Backdrop*/}
			<div 
				ref={backdropRef}
				className={`
					fixed w-full h-full top-0 left-0 bg-black bg-opacity-0 z-10 cursor-pointer
					hidden
				`}
				onClick={closeCart}
			>
			</div>
			
			<div
				ref={cartRef}
				className={`
					inline-block max-md:w-full md:min-w-60 absolute max-md:left-0 
					md:top-16 md:right-0 z-20 px-5 hidden
				`}
			>
				<div className="bg-white rounded-md">
					<div className="p-6 font-bold text-sm border-b-2 border-light-grayish-blue">
						Cart
					</div>
					<div 
						className={`
							p-6 ${productsInCart.length === 0 ? 'h-44 md:w-80' : ''}
						`}
					>
						{productsInCart.length !== 0 ? 
							(<>
								<div className="pb-6">
									{productsInCart.map(productInCart => {
										const product = availableProducts.find(product => product.id === productInCart.id )
										const productQty = productInCart.qty
										const totalPrice = product.price * productQty

										return (
											<div key={product.id} className="flex gap-4">
												<img 
													src={product.thumbnail}
													alt={'product thumbnail'}
													width={'52px'}
													className="self-center rounded"
												/>
												<div className="flex-grow grid justify-around">
													<div className="text-[15px] grid place-items-center text-dark-grayish-blue">
														{product.name}
													</div>
													<div className="text-[15px] flex items-center text-dark-grayish-blue">
														{'$' + to2DecimalPlaces(product.price)} x {productQty} 
														<span className="pl-1 font-bold text-black">
															{'$' + to2DecimalPlaces(totalPrice)}
														</span>
													</div>
												</div>
												<RemoveBtn handleClick={(product) => {deleteProduct(product.id)}}/>
											</div>
										)
									})}
								</div>
								<PrimaryBtn 
									className="w-full py-4"
									handleClick={closeCart}
								>
									Checkout
								</PrimaryBtn>
							</>) :
							<div className="w-full h-full grid place-items-center font-bold text-dark-grayish-blue text-sm">
								{'Your cart is empty'}
							</div> 
						}
					</div>
				</div>
			</div>
		</>
	)
}

const to2DecimalPlaces = (num) => ((Math.round(num*100)/100).toFixed(2))