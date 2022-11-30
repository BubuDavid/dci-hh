import React from 'react'
import Header from '../../Components/Header/Header'
import ChangeViewButton from '../../Components/ChangeViewButton/ChangeViewButton'
import SubjectList from '../../Components/SubjectListComponents/SubjectList/SubjectList'
import './Preview.css'

function Preview() {
	return (
		<div
			className='Preview'
		>
			<Header />
			<div className='PreviewButtonSection'>
				<ChangeViewButton
					view={"main"}
					text={"🦕 Regresar"}
					active={true}
				/>
				<ChangeViewButton
					view={'schedulesView'}
					text={'👽 ¡Crear!'}
					active={true}
				/>

			</div>
			<h2 className='neonText previewText'>
				Estas son tus materias, toca alguna para borrarla 👇
			</h2>
			
			<SubjectList
				onlySelected={true}
			/>

		</div>
	)
}

export default Preview