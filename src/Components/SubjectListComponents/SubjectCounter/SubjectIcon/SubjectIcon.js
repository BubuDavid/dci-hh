import React from 'react'
import './SubjectIcon.css'

function SubjectIcon({ subject, pos }) {
	let className = 'SubjectIcon' + (subject ? ' active' : '')
	return (
		<i
			className={className}
			id={pos === 4 ? 'middle' : ''}
		>
			🚀
		</i>
	)
}

export default SubjectIcon