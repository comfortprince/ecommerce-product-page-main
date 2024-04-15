import PrimaryBtn from './PrimaryBtn'
import RemoveBtn from './RemoveBtn'

export default function Cart({
	selectedProducts, 
	availableProducts,
	cartVisibility,
	closeCart
}) {
	return (
		<>
			{/*Backdrop*/}
			<div 
				className={`
					fixed w-full h-full top-0 left-0 bg-black bg-opacity-75 z-10 cursor-pointer
					${cartVisibility ? '' : 'hidden'}
				`}
				onClick={closeCart}
			>
			</div>
			
			<div
				className={`
					inline-block max-md:w-full md:min-w-60 absolute max-md:left-0 
					top-24 md:top-16 md:right-0 z-20 px-5
					${cartVisibility ? '' : 'hidden'}
				`}
			>
				<div 
					className=" 
						bg-white rounded-md shadow-2xl
					"
				>
					<div className="p-6 font-bold text-sm border-b-2 border-light-grayish-blue">
						Cart
					</div>
					<div 
						className={`
							p-6 ${selectedProducts.length === 0 ? 'h-44' : ''}
						`}
					>
						{selectedProducts.length !== 0 ? 
							(<>
								<div className="pb-6">
									{selectedProducts.map(selectedProduct => {
										const product = availableProducts.find(product => product.id === selectedProduct.id)
										const productQty = selectedProduct.quantity
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
												<RemoveBtn/>
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