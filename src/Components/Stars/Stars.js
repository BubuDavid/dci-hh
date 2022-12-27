import React, {useContext} from 'react'
import starsImage from '../../assets/images/stars.png'
import twinklingImage from '../../assets/images/twinkling.png'
import HHContext from '../../Hooks/Context'
import './Stars.css'

function Stars() {
	const {bgSize} = useContext(HHContext)
	return (
		<>
			<div className="stars"
				id="stars"
				style={{
					background: `#000 url(${starsImage}) repeat top center`,
					height: `${bgSize}`
				}}
			></div>
			<div className="twinkling"
				id="twinkling"
				style={{
					background: `transparent url(${twinklingImage}) repeat top center`,
					height: `${bgSize}`
				}}
			></div> 
		</>
	)
}

export default Stars