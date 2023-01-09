import React, { useContext } from 'react'
import HHContext from '../../../Hooks/Context'
import './ProfessorsListItem.css'

function ProfessorsListItem({ professors, subject }) {
	const {
		toggleSelectionProfessor,
		selectedProfessors
	} = useContext(HHContext)
	return (
		<div className='ProfessorsListItem'>
			<h3 className='ProfessorsListItemTitle neonText'>
				{subject}
			</h3>			
			
			<ul
				className='ProfessorsListItems'
			>
				{professors.map((professor, key) => (
					<li
						className={
							selectedProfessors[subject] && selectedProfessors[subject].includes(professor) ?
								'Professors selected' : 'Professors'
						}
						key={key}
						onClick={() => toggleSelectionProfessor(subject, professor)}
					>
						{professor}
					</li>
				))}
			</ul>

		</div>
	)
}

export default ProfessorsListItem