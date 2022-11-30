import React from 'react'
import './ScheduleSummary.css'

function ScheduleSummary({ schedule }) {
	console.log(schedule[0].NAME);
	return (
		<table>
			<tr>
				<th>Materia</th>
				<th>Professor</th>
			</tr>
		</table>
	)
}

export default ScheduleSummary