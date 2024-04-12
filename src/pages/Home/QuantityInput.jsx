import DecreaseBtn from './DecreaseBtn'
import IncreaseBtn from './IncreaseBtn'

export default function QuantityInput({className}) {
	return (
		<div 
			className={`
				${className}
				bg-light-grayish-blue inline-flex gap-7 justify-between items-center rounded px-2
			`}
		>
			<DecreaseBtn/>
			<span className="font-semibold">
				5
			</span>
			<IncreaseBtn/>
		</div>
	)
}