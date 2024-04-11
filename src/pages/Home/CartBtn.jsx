import { cartIcon } from '../../data/Constants'

export default function CartBtn({numOfItemsInCart}) {
	return(
		<button className="relative self-center">
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