import DecreaseBtn from './DecreaseBtn'
import IncreaseBtn from './IncreaseBtn'

export default function QuantityInput({
	className,
	quantity,
	setQuantity
}) {
	const decreaseQty = () => {
		if(quantity > 0) setQuantity(quantity - 1)
	}

	const increaseQty = () => {
		setQuantity(quantity + 1)
	}

	return (
		<div 
			className={`
				${className}
				bg-light-grayish-blue inline-flex gap-7 justify-between items-center rounded px-2
			`}
		>
			<DecreaseBtn decreaseQty={decreaseQty}/>
			<span className="font-semibold">
				{quantity}
			</span>
			<IncreaseBtn increaseQty={increaseQty}/>
		</div>
	)
}