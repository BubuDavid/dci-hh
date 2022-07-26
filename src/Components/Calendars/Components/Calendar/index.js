import React, {useContext} from 'react'
import HHContext from '../../../Context'
import { CCContext } from '../CalendarsContext'
import { getTableParams, getEventsForCalendar } from './auxiliarFunctions'
import './Calendar.css'

export default function Calendar() {
	const {
		schedules
	} = useContext(HHContext)
	const {
		current
	} = useContext(CCContext)

	const schedule = schedules[current - 1]
	const {
		weekDays,
		timeSlots
	} = getTableParams(schedule)

	
	const events = getEventsForCalendar(schedule, timeSlots, weekDays.length)

	return (
		<div className='CalendarContainer'>

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
				
			{/* <div
				className='eventContainerBackground'
			>
			</div> */}
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
							<span className='eventName'>{e.name}</span><br />
							{e.professor1 && (
								<>
									<span className='eventProfessor'>{e.professor1}</span><br />
								</>
							)}
							{e.professor2 && (
								<>
									<span className='eventProfessor'>{e.professor2}</span><br />
								</>
							)}
							{e.professor3 && (
								<>
									<span className='eventProfessor'>{e.professor3}</span><br />
								</>
							)}
							<span className='eventGroup'>Group: { e.group }</span><br />
							<span className='eventTime'>{ e.time }</span> <span className='eventRoom'>{ e.room }</span>
						</div>
					</div>
				})}
			</div>

		</div>
	)
}