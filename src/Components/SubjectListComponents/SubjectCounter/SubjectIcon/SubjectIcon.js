import React from 'react'
import './SubjectIcon.css'

function SubjectIcon({ subject }) {

	let className = 'SubjectIcon' + (subject ? ' active' : '')
	return (
		<i className={className}>
			🚀
		</i>
	)
}

export default SubjectIcon