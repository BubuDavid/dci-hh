import React from 'react'
import { getTableParams, getEventsForCalendar } from '../../../tools/calendarTools'
import './ScheduleCalendar.css'

function ScheduleCalendar({ schedule }) {
	
	const {
		weekDays,
		timeSlots
	} = getTableParams(schedule)

	const events = getEventsForCalendar(schedule, timeSlots, weekDays.length)

	return (
		events.length > 0 ? (
			<div className='ScheduleCalendar'>

				<div className='header'>
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
								{e.PROFESSOR1 && (
									<>
										<span className='eventProfessor'>{e.PROFESSOR1}</span><br />
									</>
								)}
								{e.PROFESSOR2 && (
									<>
										<span className='eventProfessor'>{e.PROFESSOR2}</span><br />
									</>
								)}
								{e.PROFESSOR3 && (
									<>
										<span className='eventProfessor'>{e.PROFESSOR3}</span><br />
									</>
								)}
								{e.PROFESSOR4 && (
									<>
										<span className='eventProfessor'>{e.PROFESSOR4}</span><br />
									</>
								)}
								<span className='eventGroup'>Group: { e.GROUP }</span><br />
								<span className='eventTime'>{ e.TIME }</span> <span className='eventRoom'>{ e.ROOM }</span>
							</div>
						</div>
					})}
				</div>

			</div>
		): <></>
	)
}

export default ScheduleCalendar