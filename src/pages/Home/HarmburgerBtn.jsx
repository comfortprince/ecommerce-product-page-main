import { harmburgerIcon } from '../../data/Constants'

export default function HarmburgerBtn() {
	return(
		<button className="self-center md:hidden">
			<img src={harmburgerIcon} alt="Navbar Toggler"/>
		</button>
	)
}