import React from 'react'
import './SearchButton.css'

function SearchButton({ subjects, setDisplaySubjects }) {

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
		<input
			className='SearchButton'
			type={'text'}
			onChange={(e) => filterSubjects(subjects, e.target.value)}
		/>
	)
}

export default SearchButton