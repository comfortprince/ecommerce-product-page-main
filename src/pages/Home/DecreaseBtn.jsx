import { useState } from 'react'

export default function DecreaseBtn() {
	const HOVER_COLOR = '#FF7E1B99'
	const PERMENANT_COLOR = '#FF7E1B'

	const [iconColor, setIconColor] = useState(PERMENANT_COLOR)

	return(
		<button 
			className="p-1"
			onMouseEnter={() => {setIconColor(HOVER_COLOR)}}
			onMouseLeave={() => {setIconColor(PERMENANT_COLOR)}}
		>
			<svg 
				width="12" 
				height="4" 
				xmlns="http://www.w3.org/2000/svg"
				// xmlns:xlink="http://www.w3.org/1999/xlink"
			>
				<defs>
					<path 
						d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" 
						id="a"
					/>
				</defs>
				<use 
					fill={iconColor} 
					fillRule="nonzero" 
					href="#a"
				/>
			</svg>
		</button>
	)
}