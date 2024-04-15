import { logo } from '../../data/Constants'

export default function Logo() {
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