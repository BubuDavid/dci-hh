import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import './SearchBar.css'

function SearchBar() {
	const {
		subjectNames: subjects,
		setSearchWord
	} = useContext(HHContext)

	function filterSubjects(subjects, subjectName) {
		let normalizedSubjectName = subjectName
			.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
			.toUpperCase()
		
		setSearchWord(normalizedSubjectName)
	}
	
	return (
		<>
			<div className='SearchBarPlaceHolder'>
				<input
					className='SearchBar'
					type={'text'}
					onChange={(e) => filterSubjects(subjects, e.target.value)}
					placeholder="🔍 Buscar Materias"
				/>

			</div>

		</>

	)
}

export default SearchBar