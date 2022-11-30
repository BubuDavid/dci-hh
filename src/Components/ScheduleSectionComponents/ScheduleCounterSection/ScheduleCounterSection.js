import React from 'react'
import './ScheduleCounterSection.css'

function ScheduleCounterSection({ currentScheduleIndex, setCurrentScheduleIndex, totalScheduleNumber }) {
	function changeSchedule(newCurrent) {
		if (newCurrent < 0) newCurrent = 0
		if (newCurrent > totalScheduleNumber - 1) newCurrent = totalScheduleNumber - 1

		setCurrentScheduleIndex(newCurrent)
	}
	return (
		<div className='ScheduleCounterSection'>
				<div
					className={'ScheduleSectionText'}
					onClick={(e) => changeSchedule(currentScheduleIndex - 1)}
					id="prevBtn"
					style={{
						opacity: currentScheduleIndex + 1 == 1 ? '0.5' : '1',
						pointerEvents: currentScheduleIndex + 1 == 1 ? 'none' : 'all'
					}}
				>👈 Horario anterior</div>
				<div className='ScheduleSectionCounter'>
						<span className='ScheduleNumber'>{currentScheduleIndex + 1}</span>
						<div className='background'></div>
						<span className='ScheduleNumber'>{totalScheduleNumber}</span>
				</div>
				<div
					className={'ScheduleSectionText'}
					onClick={(e) => changeSchedule(currentScheduleIndex + 1)}
					id="nextBtn"
					style={{
						opacity: currentScheduleIndex + 1 == totalScheduleNumber ? '0.5' : '1',
						pointerEvents: currentScheduleIndex + 1 == totalScheduleNumber ? 'none' : 'all'
					}}
				>Siguiente Horario 👉</div>


			</div>
	)
}

export default ScheduleCounterSection