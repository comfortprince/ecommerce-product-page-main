import { useEffect, useRef } from 'react'

import SideBarCloseBtn from './SideBarCloseBtn'

export default function SideBar({
	navLinks,
	sideBarVisibility,
	closeSideBar
}) {
	const sideBarRef = useRef(null)

	useEffect(()=>{
		const sideBar = sideBarRef.current

		sideBar.classList.remove('invisible')
		sideBar.classList.remove('hidden')
		sideBar.style.left = `-${sideBar.clientWidth}px`
	}, [])

	useEffect(() => {
		const sideBar = sideBarRef.current
		const slideDistance = sideBar.clientWidth

		const timings = {
			duration: 300,
			iterations: 1,
			fill: 'forwards',
			easing: 'ease-in-out'
		}

		const slideIn = [{
			left: `-${slideDistance}px`
		},{
			left: `0px`
		}]

		const slideOut = [{
			left: ``
		},{
			left: `-${slideDistance}px`
		}]

		if(sideBarVisibility){
			sideBar.animate(slideIn, timings)
		}else{
			sideBar.animate(slideOut, timings)
		}
	}, [sideBarVisibility])

	return(
		<>
			{/*Backdrop*/}
			{sideBarVisibility &&
			<div 
				className="fixed top-0 left-0 md:hidden w-full h-full bg-black bg-opacity-75 z-10"
				onClick={closeSideBar}
			></div>
			}

			<section 
				ref={sideBarRef}
				className={`
					fixed top-0 hidden md:hidden w-2/3 h-full z-20 bg-white
				`}
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
			</section>
		</>
	)
}