import { useState } from 'react'

import { prevIcon, nextIcon } from '../../data/Constants'

import CarouselNavButton from './CarouselNavButton'
import LightBox from './LightBox'

export default function ProductCarousel({productImgs=[]}) {
	const [activeImg, setActiveImg] = useState(0)
	const [lightBoxVisibility, setLightBoxVisibility] = useState(false)

	const goToNextImg = (ndx) => {
		const numOfProductImgs = productImgs.length
		setActiveImg((ndx % numOfProductImgs + numOfProductImgs) % numOfProductImgs)
	}

	return(
		<>
			<LightBox 
				productImgs={productImgs} 
				activeImg={activeImg} 
				setActiveImg={setActiveImg} 
				goToNextImg={goToNextImg}
				lightBoxVisibility={lightBoxVisibility} 
				setLightBoxVisibility={setLightBoxVisibility}
			/>
			<div
				className="
					md:w-1/2 flex flex-col items-center
				"
			>
				<div className='relative'>
					{productImgs.map((productImg, ndx) => (
						<div 
							key={ndx}
							className={`
								${ndx !== activeImg ? 'hidden' : ''}
								inline-block md:rounded-md max-md:w-full
								cursor-pointer md:overflow-hidden relative
							`}
							onClick={()=>{setLightBoxVisibility(true)}}
						>
							<img 
								src={productImg.img} 
								alt="product"
								width={450}
								height={'auto'}
							/>
							<div 
								className="
									bg-light-grayish-blue 
									w-full h-full
									absolute top-0 bg-opacity-0 hover:bg-opacity-40
									transition-all duration-300
								"
							></div>
						</div>
					))}
					<div className='
						md:hidden
						absolute top-0 w-full h-full
						flex items-center justify-between px-6
					'>
						<CarouselNavButton 
							icon={prevIcon} 
							handleClick={() => {goToNextImg(activeImg - 1)}}
						/>
						<CarouselNavButton 
							icon={nextIcon} 
							handleClick={() => {goToNextImg(activeImg + 1)}}
						/>
					</div>
				</div>
				<ul className="flex gap-7 mt-7 max-md:hidden">
					{productImgs.map((productImg, ndx)=>(
						<li
							key={ndx}
							className="relative"
							onClick={()=>{setActiveImg(ndx)}}
						>
							<img  
								src={productImg.thumbnail} 
								alt="product thumbnail"
								width={90}
								height={'auto'}
								className={`
									rounded-lg
									bg-black
	 							`}
							/>
							<span 
								className={`
									${ndx === activeImg ? 
										'bg-opacity-70' : 
										'bg-opacity-0 hover:bg-opacity-40 border-opacity-0'
									}
									w-full h-full rounded-lg
									bg-light-grayish-blue 
									absolute top-0 border-2 border-orange
									transition-all duration-300 cursor-pointer
								`}
							></span>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}