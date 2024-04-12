export default function PrimaryBtn({children, className}) {
	return (
		<button 
			className={`
				${className}
				bg-orange hover:bg-opacity-75 transition-all duration-300 rounded text-white font-semibold
			`}
		>
			{children}
		</button>
	)
}