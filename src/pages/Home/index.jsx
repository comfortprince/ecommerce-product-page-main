import { logo } from '../../data/Constants'

export default function Home() {
	return(
		<>
			<header 
				className="
					md:mx-16 lg:mx-32 
				"
			>
				<Logo/>
				<Nav/>
			</header>
			<main>
				
			</main>
		</>
	)
}

function Logo() {
	return(
		<img src={logo} alt="Logo"/>
	)
}