import React from 'react'
import { getNumberTimes } from '../../../tools/tools';
import './ScheduleSummary.css'

function ScheduleSummary({ schedule }) {
	
	let n_times = getNumberTimes(schedule)
	
	return (
		<table className='ScheduleSummary'>
			<thead>
				<tr>
					<th>Materia</th>
					<th>Grupo</th>
					{[...Array(n_times)].map((el, key) => (
						<th key={key}>{`Día/Hora/Aula${key + 1}`}</th>
					))}
					<th>Profesores</th>
				</tr>
			</thead>
			<tbody>
				{schedule.map((subject, key) => (
					<tr key={key}>
						<td>{subject.NAME}</td>
						<td>{subject.GROUP}</td>
						{[...Array(n_times)].map((el, timeKey) => (
							<td key={timeKey}>{subject[`DAY/TIME/ROOM${timeKey + 1}`]}</td>
						))}
						<td>{subject.PROFESSORS}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default ScheduleSummary