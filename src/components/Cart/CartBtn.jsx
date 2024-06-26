import { cartIcon } from '../../data/Constants'

export default function CartBtn({productsInCart, openCart}) {
	let numOfItemsInCart = 0

	productsInCart.forEach(product => {
		numOfItemsInCart += product.qty
	})

	return(
		<button 
			className="relative self-center"
			onClick={openCart}
		>
			{numOfItemsInCart ? 
				<span 
					className="text-white absolute -top-2 left-2 bg-orange px-2 text-xs rounded-lg"
				>
					{numOfItemsInCart}
				</span> :
				''
			}

			<img 
				className="self-center"
				src={cartIcon} 
				alt="Cart Icon"
			/>
		</button>
	)
}