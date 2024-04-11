export default function Avatar({avatar}) {
	return(
		<img
			className="
				self-center rounded-full cursor-pointer
				border-2 border-black border-opacity-0 hover:border-orange hover:border-opacity-100 
				transition-all duration-300
			" 
			src={avatar} 
			alt="Avatar"
			width="40rem"
			height="40rem"
		/>
	)
}