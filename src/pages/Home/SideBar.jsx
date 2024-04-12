import SideBarCloseBtn from './SideBarCloseBtn'

export default function SideBar({
	navLinks,
	sideBarVisibility,
	closeSideBar
}) {
	return(
		<>
			{/*Backdrop*/}
			{sideBarVisibility &&
			<div 
				className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10"
				onClick={closeSideBar}
			></div>
			}

			{sideBarVisibility && 
			<section 
				className="fixed top-0 left-0 w-2/3 h-full z-20 bg-white"
			>
				<div className="pl-4 pt-6 pb-6">
					<SideBarCloseBtn handleClick={closeSideBar}/>
				</div>
				<nav className="flex flex-col gap-4 pl-4">
					{navLinks.map((link, ndx) => (
						<a
							key={ndx} 
							href="#!"
							className="
								text-sm font-bold text-dark-grayish-blue
							"
						>
							{link}
						</a>
					))}
				</nav>
			</section>}
		</>
	)
}