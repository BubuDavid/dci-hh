import React, { useContext } from 'react'
import HHContext from '../../../Hooks/Context'
import useFetchAPI from '../../../Hooks/useFetchAPI'
import ProfessorsListItem from '../ProfessorsListItem/ProfessorsListItem'
import './ProfessorsList.css'

function ProfessorsList() {
	const {
		selectedSubjects
	} = useContext(HHContext)

	const body = {
		'subjects': selectedSubjects
	}
	const {
		data: professors,
		loading: loading,
		eror: error
	} = useFetchAPI({ 
		url: process.env.REACT_APP_API_PROFESSORS,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
    },
		body: JSON.stringify(body)
	})
	
	
	return (
		<div
			className='ProfessorsList'
		>
			{loading ?
				<h3 className='message'>Estamos cargando, awanta... 🐱‍🚀</h3>
				: null}
			
			{!loading && error ? (
				<div className='message'>
					<h3>{`😱 Hay un error en el servidor👇`}</h3>
					<h2><b>{`Status -> ${error}`}</b></h2>
				</div>
			) : null}

			{!loading && professors ?
				Object.keys(professors).map((subject, key) => (
					<ProfessorsListItem
						subject={subject}
						professors={professors[subject]}
						key={key}
					/>
				))
			: null}
			

		</div>
	)
}

export default ProfessorsList