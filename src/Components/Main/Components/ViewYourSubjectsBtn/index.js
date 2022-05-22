import { useContext } from 'react'
import HHContext from '../../../Context'

import './ViewYourSubjectsBtn.css'

export default function ViewYourSubjectsBtn() {
	const {
		toggleView
	} = useContext(HHContext)
	return (
		<button
			id='ViewYourSubjectsBtn'
			onClick={() => toggleView('R')}
		>
			👀 Mis Materias
		</button>
	)
}
