import { useState } from 'react'

import PrimaryBtn from '../../components/Commons/PrimaryBtn'
import QuantityInput from '../../components/ProductDetails/QuantityInput'

export default function ProductDetails({
	product,
	productsInCart,
	setProductsInCart,
}) {
	const [quantity, setQuantity] = useState(0)
	const addToCart = () => {
		const productInCart = productsInCart.find(productInCart => productInCart.id === product.id )
		const oldQty = productInCart ? productInCart.qty : 0
		const newQty = oldQty + quantity

		const newProductsInCart = productsInCart.filter(prod => prod.id !== product.id)
		
		if(quantity !== 0){
			setProductsInCart([...newProductsInCart, {
				id: product.id,
				qty: newQty
			}])
			setQuantity(0)
		}
	}

	return(
		<div className="md:w-96 md:pt-16 max-md:p-6">
			<div
				className="text-orange font-bold text-sm uppercase mb-3"
			>
				{product.companyName}
			</div>
			<h1 className="text-4xl font-bold mb-6">
				{product.name}
			</h1>
			<p className="text-dark-grayish-blue mb-4">
				{product.description}
			</p>
			<div className="max-md:flex justify-between items-center">
				<div className="flex items-center gap-4">
					<span className="text-2xl font-bold">
						{'$' + to2DecimalPlaces(product.price)}
					</span>
					<span className="bg-orange bg-opacity-10 px-1 rounded-md text-sm font-bold text-orange">
						{product.discount + '%'}
					</span>
				</div>
				<span className="font-bold text-grayish-blue line-through text-sm">
					{'$' + to2DecimalPlaces(product.oldPrice)}
				</span>
			</div>
			<div className="flex flex-col md:flex-row gap-4 mt-6">
				<QuantityInput 
					className="py-2"
					quantity={quantity}
					setQuantity={setQuantity}
				/>
				<PrimaryBtn 
					className="flex-grow py-2"
					handleClick={addToCart}
				>
					Add to Cart
				</PrimaryBtn>
			</div>
		</div>
	)
}

const to2DecimalPlaces = (num) => ((Math.round(num*100)/100).toFixed(2))