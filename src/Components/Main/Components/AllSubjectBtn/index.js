import { useContext } from 'react'
import HHContext from '../../../Context'

import './AllSubjectBtn.css'

export default function AllSubjectBtn() {
	const {
		toggleView
	} = useContext(HHContext)
	return (
		<button
			className='AllSubjectBtn'
			onClick={() => toggleView('L')}
		>
			👈 Regresar
		</button>
	)
}
