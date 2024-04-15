import { useEffect, useRef } from 'react'

import SideBarCloseBtn from './SideBarCloseBtn'

export default function SideBar({
	navLinks,
	sideBarVisibility,
	closeSideBar
}) {
	const sideBarRef = useRef(null)
	const didMount = useRef(0)

	useEffect(() => {
		const NUM_OF_RERENDERS = 2

		const sideBar = sideBarRef.current
		const slideDistance = sideBar.clientWidth

		if(didMount.current < NUM_OF_RERENDERS){
			sideBar.classList.remove('invisible')
			sideBar.style.left = `-${sideBar.clientWidth}px`
			didMount.current++
			return
		}

		if(sideBarVisibility){
			sideBar.animate([{
				left: `-${slideDistance}px`
			},{
				left: `0px`
			}],{
				duration: 300,
				iterations: 1,
				fill: 'forwards',
				easing: 'ease-in-out'
			})
		}else{
			sideBar.animate([{
				left: `0px`
			},{
				left: `-${slideDistance}px`
			}],{
				duration: 300,
				iterations: 1,
				fill: 'forwards',
				easing: 'ease-in-out'
			})
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
					fixed top-0 md:hidden w-2/3 h-full z-20 bg-white invisible
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