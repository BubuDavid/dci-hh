import React, { useContext } from 'react'
import HHContext from '../../../Hooks/Context'
import './MakeSchedulesButton.css'

function MakeSchedulesButton() {
	const {
		selectedSubjects,
		setView
	} = useContext(HHContext)

	return (
		<button
			className={'MakeSchedulesButton' + (selectedSubjects.length > 0 ? ' active' : '')}
			onClick={(e) => setView('schedules')}
		>
			¡HACER!
		</button>
	)
}

export default MakeSchedulesButton