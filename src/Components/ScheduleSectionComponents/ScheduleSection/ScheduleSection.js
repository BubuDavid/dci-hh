import React, { useState } from 'react'
import ScheduleCounterSection from '../ScheduleCounterSection/ScheduleCounterSection'
import ScheduleSummary from '../ScheduleSummary/ScheduleSummary'
import ScheduleCalendar from '../ScheduleCalendar/ScheduleCalendar'
import './ScheduleSection.css'

function ScheduleSection({ schedules }) {
	const [currentScheduleIndex, setCurrentScheduleIndex] = useState(0)
	const totalScheduleNumber = schedules.length_of_result
	return (
		<div className='ScheduleSection'>
			<ScheduleCounterSection
				currentScheduleIndex={currentScheduleIndex}
				setCurrentScheduleIndex={setCurrentScheduleIndex}
				totalScheduleNumber={totalScheduleNumber}
			/>

			<ScheduleSummary
				schedule={schedules.result[currentScheduleIndex]}
			/>

			<ScheduleCalendar
				schedule={schedules.result[currentScheduleIndex]}
			/>
			
		</div>
	)
}

export default ScheduleSection