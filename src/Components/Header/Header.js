import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import './Header.css'

function Header() {
	const {goBack} = useContext(HHContext)
	return (
		<h1
			className='Header neonText neonBorder'
			onClick={(e) => goBack()}
		>
			🚀 ¡Hacedor de Horarios-Inador!
		</h1>
	)
}

export default Header