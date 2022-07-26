import { useContext } from 'react'
import { CCContext } from '../CalendarsContext'

import './ScheduleSummary.css'

export default function ScheduleSummary() {
	const {
		schedules,
		current
	} = useContext(CCContext)

	const isThere3Professors = () => {
		const schedule = schedules[current - 1]
		for (const subject of schedule) {
			if (subject.professor3) {
				return true
			}
		}
	}
	let columnNmames = ['name', 'group', 'day1', 'day2', 'day3', 'professor1', 'professor2']
	if (isThere3Professors()) {
		columnNmames.push('professor3')
	}
	return (
		<table
			className='ScheduleSummary'
			id="currentSummary"
		>
			<thead>
				<tr>
					<th colSpan={isThere3Professors() ? 8 : 7} className='TableTitle'>Resumen del Horario</th>
				</tr>
			</thead>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Grupo</th>
					<th>Día / Hora / Aula 1</th>
					<th>Día / Hora / Aula 2</th>
					<th>Día / Hora / Aula 3</th>
					<th>Profesor 1</th>
					<th>Profesor 2</th>
					{isThere3Professors() && <th>Profesor 3</th>}
				</tr>
			</thead>
			<tbody>
				{schedules[current - 1].map((subject, index) => {
					return <tr
						key={index}
					>
						{columnNmames.map((columnName, columnIndex) => (
							<td
								key={columnIndex}
							>
								{subject[columnName]}
							</td>
						))}
					</tr>
						
				})}
			</tbody>
		</table>
	)
}
