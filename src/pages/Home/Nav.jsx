export default function Nav({navLinks}) {
	return(
		<nav
			className="flex gap-6 max-md:hidden"
		>
			{navLinks.map((link, ndx) => (
				<a
					key={ndx} 
					href="#!"
					className="
						py-6 cursor-pointer text-sm
						border-b-4 border-black border-opacity-0 hover:border-orange hover:border-opacity-100
						text-dark-grayish-blue hover:text-very-dark-blue
						transition-all duration-300
					"
				>
					{link}
				</a>
			))}
		</nav>
	)
}