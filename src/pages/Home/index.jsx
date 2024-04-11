import { logo, cartIcon, avatar, harmburgerIcon } from '../../data/Constants'
import navLinks from '../../data/navLinks'

export default function Home() {
	return(
		<>
			<header 
				className="
					px-4 py-4 md:mx-16 lg:mx-32
					flex
					border-b-2 border-light-grayish-blue
				"
			>
				<div
					className="flex justify-between gap-6 md:gap-12"
				>
					<HarmburgerBtn/>
					<Logo/>
					<Nav/>
				</div>
				<div 
					className="
						flex gap-8 justify-end flex-grow
					"
				>
					<CartBtn/>
					<Avatar/>	
				</div>
			</header>
			<main>
				
			</main>
		</>
	)
}

function HarmburgerBtn() {
	return(
		<button className="self-center md:hidden">
			<img src={harmburgerIcon} alt="Navbar Toggler"/>
		</button>
	)
}

function CartBtn({numOfItemsInCart = 3}) {
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

function Avatar() {
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