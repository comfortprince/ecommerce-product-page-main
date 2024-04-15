import { closeIcon } from '../../data/Constants'

export default function LightBoxCloseButton({handleClick}) {
	return(
		<button 
			onClick={handleClick}
		>
			<img src={closeIcon} alt="close light box icon"/>
		</button>
	)
}