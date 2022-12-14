import React, { useContext } from 'react'
import SubjectIcon from './SubjectIcon/SubjectIcon'
import './SubjectCounter.css'
import HHContext from '../../../Hooks/Context'

function SubjectCounter() {
	const {
		selectedSubjects
	} = useContext(HHContext)

	return (
		<div className='SubjectCounter'>
			{[...selectedSubjects.concat(Array(10 - selectedSubjects.length))].map((subject, key) => (
				<SubjectIcon
					key={key}
					subject={subject}
					pos={key}
				/>
			))}
		</div>
	)
}

export default SubjectCounter