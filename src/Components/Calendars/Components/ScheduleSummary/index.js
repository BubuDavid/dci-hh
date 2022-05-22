import { useContext } from 'react'
import { CCContext } from '../CalendarsContext'

import './ScheduleSummary.css'

export default function ScheduleSummary() {
	const {
		schedules,
		current
	} = useContext(CCContext)

let columnNmames = ['name', 'group', 'day1', 'day2', 'day3', 'professor1', 'professor2']
	return (
		<table
			className='ScheduleSummary'
			id="currentSummary"
		>
			<thead>
				<tr>
					<th colSpan={7} className='TableTitle'>Resumen del Horario</th>
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
