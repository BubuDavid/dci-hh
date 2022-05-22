import { useContext, useState } from 'react'

import HHContext from '../../../Context'
import './Subject.css'

export default function Subject({ subject }) {
	const {
		toggleSelectSubject,
		setOverflowSubjects,
	} = useContext(HHContext)
	const [overflowAnimation, setOverflowAnimation] = useState(false)
	const id = subject._ID
	const name = subject.NAME
	const isSelected = subject.selected
	let className = 'Subject'
	if (isSelected) className += ' Selected'
	if (overflowAnimation) className = 'Subject Error'
	return (
		<div
			className= {className}
			onClick={() => {
				if (!toggleSelectSubject(id)) {
					setOverflowSubjects(true)
					setOverflowAnimation(true)
					setTimeout(() => {
						setOverflowSubjects(false)
						setOverflowAnimation(false)
					}, 1000)
				}
			}}
		>
			<i className='SubjectIcon'>🐝</i> <p className='SubjectP'>{name}</p>
		</div>
	)
}
