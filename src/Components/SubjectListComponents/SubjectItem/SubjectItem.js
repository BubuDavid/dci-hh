import React, { useContext } from 'react'
import HHContext from '../../../Hooks/Context'
import './SubjectItem.css'

function SubjectItem({ subject }) {
	const {
		toggleSelectionSubject,
		selectedSubjects
	} = useContext(HHContext)

	let selected = selectedSubjects.includes(subject)
	let thisClassName = selected ? 'SubjectListItemBox selected' : 'SubjectListItemBox'
	return (
		<div
			className={thisClassName}
			onClick={(e) => toggleSelectionSubject(subject)}
		>
			<li
				className='SubjectListItem neonText'
			>
				<span className='SubjectItemText'>{subject}</span>
			</li>
		</div>
	)
}

export default SubjectItem