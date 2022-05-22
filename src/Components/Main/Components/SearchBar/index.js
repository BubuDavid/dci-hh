import { useContext } from 'react'

import HHContext from '../../../Context'

import './SearchBar.css'

export default function SearchBar() {
	const {
		setSubjectName
	} = useContext(HHContext)
	return (
		<input
			className='SearchBar'
			placeholder='Buscar... 🔍'
			onChange={(e) => setSubjectName(e.target.value)}
		>

		</input>
	)
}
