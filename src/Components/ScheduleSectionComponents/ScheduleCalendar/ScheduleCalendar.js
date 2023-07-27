import React from 'react'
import { getTableParams, getEventsForCalendar } from '../../../tools/calendarTools'
import './ScheduleCalendar.css'

function ScheduleCalendar({ schedule }) {
		
	const {
		weekDays,
		timeSlots
	} = getTableParams(schedule)

	let lessThan660 = false
	if (window.innerWidth < 660) {
		lessThan660 = true
	}
	const events = getEventsForCalendar(schedule, timeSlots, weekDays.length, lessThan660)

	return (
		events.length > 0 ? (
			<div className='ScheduleCalendar'>

				<div className='CalendarHeader'>
					{/* List of week days */}
					<ul
						className='weekDays'
						style={{
							gridTemplateColumns: `repeat(${weekDays.length}, 1fr)`
						}}
					>
						{weekDays.map((day, key) => (
							<li key={key}>
								{day[0]}
							</li>
						))}
					</ul>
				</div>

				<div className='timeSlotsContainer'>
					<ul className='timeSlots'>
						{timeSlots.map((time, key) => (
								<li key={key}>
									{time}
								</li>
							))}
					</ul>
				</div>
					
				<div
					className='eventContainer'
					style={{
						gridTemplateColumns: `repeat(${weekDays.length}, 1fr)`,
						gridTemplateRows: `repeat(${60 * (timeSlots.length)}, 1fr)`
					}}
					>
					{events.map((e, key) => {
						return <div
							className='slot'
							key={key}
							style={{
								gridRow: e.row,
								gridColumn: e.column,
								width: e.width,
								height: e.height,
								background: e.color
							}}
						>
							<div className='eventInfo'>
								<span className='eventName'>{e.NAME}</span><br />
							</div>
						</div>
					})}
				</div>

			</div>
		): <></>
	)
}

export default ScheduleCalendar