export default function PrimaryBtn({
	children, 
	className, 
	handleClick = null
}) {
	return (
		<button 
			className={`
				${className}
				bg-orange hover:bg-opacity-75 transition-all duration-300 rounded text-white font-semibold text-sm
			`}
			onClick={handleClick}
		>
			{children}
		</button>
	)
}