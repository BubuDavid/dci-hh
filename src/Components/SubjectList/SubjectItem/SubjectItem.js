import React from 'react'
import './SubjectItem.css'

function SubjectItem({subject}) {
	return (
		<li className='SubjectListItem'>{subject}</li>
	)
}

export default SubjectItem