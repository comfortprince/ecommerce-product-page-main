import { prevIcon, nextIcon } from '../../data/Constants'

import CarouselNavButton from './CarouselNavButton'
import LightBoxCloseButton from './LightBoxCloseButton'

export default function LightBox({
	productImgs,
	activeImg, 
	setActiveImg, 
	goToNextImg,
	lightBoxVisibility, 
	setLightBoxVisibility
}) {

	return(
		<div 
			className={`
				${ lightBoxVisibility ? '' : 'md:hidden' }
				fixed top-0 left-0 bg-black w-full h-full z-10 bg-opacity-75
				flex justify-center max-md:hidden
			`}
		>
			<div className="inline-block h-full pt-6">
				<div className="flex justify-end py-4">
					<LightBoxCloseButton 
						handleClick={() => { setLightBoxVisibility(false) }}
					/>
				</div>
				<div className='relative bg-red'>
					{productImgs.map((productImg, ndx) => (
						<img 
							key={ndx} 
							src={productImg.img} 
							alt="product"
							width={450}
							height={'auto'}
							className={`
								${ndx !== activeImg ? 'hidden' : ''}
								md:rounded-md max-md:w-full
							`}
						/>
					))}
					<div className='
						absolute top-0 w-full h-full
						flex items-center justify-between
					'>
						<CarouselNavButton 
							icon={prevIcon} 
							handleClick={() => {goToNextImg(activeImg - 1)}}
							className="absolute -left-4"
						/>
						<CarouselNavButton 
							icon={nextIcon} 
							handleClick={() => {goToNextImg(activeImg + 1)}}
							className="absolute -right-4"
						/>
					</div>
				</div>
				<ul className="flex justify-between pt-7 px-8">
					{productImgs.map((productImg, ndx)=>(
						<li
							key={ndx}
							className="relative"
							onClick={()=>{setActiveImg(ndx)}}
						>
							<img  
								src={productImg.thumbnail} 
								alt="product thumbnail"
								width={70}
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
		</div>
	)
}