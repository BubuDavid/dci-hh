import React from 'react'
import './SearchBar.css'

function SearchBar({ subjects, setDisplaySubjects }) {

	function filterSubjects(subjects, subjectName) {
		let normalizedSubjectName = subjectName
			.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
			.toUpperCase()
		
		let newSubjects = subjects.filter((subject) => (
			subject.includes(normalizedSubjectName)
		))


		setDisplaySubjects(newSubjects)
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