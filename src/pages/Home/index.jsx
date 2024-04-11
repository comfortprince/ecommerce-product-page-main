import { logo } from '../../data/Constants'
import navLinks from '../../data/navLinks'

export default function Home() {
	return(
		<>
			<header 
				className="
					md:mx-16 lg:mx-32
					flex
					border-b-2 border-light-grayish-blue
				"
			>
				<div
					className="flex justify-between gap-12"
				>
					<Logo/>
					<Nav/>
				</div>
			</header>
			<main>
				
			</main>
		</>
	)
}

function Logo() {
	return(
		<span 
			className="
				inline-grid place-items-center
				md:border-b-4 border-black border-opacity-0
			"
		>
			<img src={logo} alt="Logo"/>
		</span>
	)
}

function Nav() {
	return(
		<nav
			className="flex gap-6 max-md:hidden"
		>
			{navLinks.map((link) => (
				<a 
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