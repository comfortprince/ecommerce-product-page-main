export default function CarouselNavButton({icon, handleClick}) {
	return(
		<button 
			className="
				bg-white rounded-full w-8 h-8 inline-grid place-items-center
			"
			onClick={handleClick}
		>
			<img src={icon} alt="icon" className="scale-75"/>
		</button>
	)
}