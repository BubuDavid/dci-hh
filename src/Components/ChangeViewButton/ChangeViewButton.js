import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import './ChangeViewButton.css'

function ChangeViewButton({view, text, active, size, isScheduleView}) {
	const {
		selectedSubjects,
		setViewChangeSize
	} = useContext(HHContext)

	if (isScheduleView) {
		let nSize = 1200
		nSize += selectedSubjects.length * 60
		size = `${nSize}px`
	}

	return (
		<button
			className={'ChangeViewButton' + (selectedSubjects.length || active > 0 ? ' active' : '')}
			onClick={(e) => { setViewChangeSize(view, size)}}
		>
			{text}
		</button>
	)
}

export default ChangeViewButton