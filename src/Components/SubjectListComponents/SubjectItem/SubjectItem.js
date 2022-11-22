import React from 'react'
import './SubjectItem.css'

function SubjectItem({subject}) {
	return (
		<div className='SubjectListItemBox'>
			<li
				className='SubjectListItem neonText'
			>
				<span className='SubjectItemText'>{subject}</span>
			</li>
		</div>
	)
}

export default SubjectItem