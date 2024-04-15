import { harmburgerIcon } from '../../data/Constants'

export default function HarmburgerBtn({toggleSideBar}) {
	return(
		<button 
			className="self-center md:hidden"
			onClick={toggleSideBar}
		>
			<img src={harmburgerIcon} alt="Navbar Toggler"/>
		</button>
	)
}