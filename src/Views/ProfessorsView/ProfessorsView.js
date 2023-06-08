import React from 'react'
import Header from '../../Components/Header/Header'
import ChangeViewButton from '../../Components/ChangeViewButton/ChangeViewButton'
import ProfessorsList from '../../Components/ProfessorsListComponents/ProfessorsList/ProfessorsList'
import './ProfessorsView.css'

function ProfessorsView() {
	return (
		<div className='ProfessorsView'>
			<Header />
			<div className='ProfessorsViewButtonSection'>
				<ChangeViewButton
					view={"preview"}
					text={"🦕 Regresar"}
					active={true}
				/>
				<ChangeViewButton
					view={'schedulesView'}
					size={'100px'}
					text={'👽 ¡Crear!'}
					isScheduleView={true}
				/>
			</div>

			<h2 className='neonText ProfessorsViewText'>
				Estos son tus profesores y profesoras, puedes eliminar a quien quieras de tus horarios solo dando click en su nombre. Después de darles click, aparecerán <span style={{color:'#CE1212'}}>en rojo</span> indicando que <span style={{textDecoration:'underline'}}>NO APARECERÁN</span> en tus horarios.
			</h2>

			<ProfessorsList />
		</div>
	)
}

export default ProfessorsView