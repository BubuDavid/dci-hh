import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import HHContext from '../../Hooks/Context'
import useFetchAPI from '../../Hooks/useFetchAPI'
import ScheduleSection from '../../Components/ScheduleSectionComponents/ScheduleSection/ScheduleSection'
import SubjectCard from '../../Components/SubjectCard/SubjectCard'
import './SchedulesView.css'

function SchedulesView() {
	const { selectedSubjects } = useContext(HHContext)

	
	const body = {
		"subjects": selectedSubjects
	}
	const {
		data: schedules,
		loading,
		error
	} = useFetchAPI({
		url: process.env.REACT_APP_API_SCHEDULES,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
    },
		body: JSON.stringify(body)
	})
	
	return (
		<div className='SchedulesView View'>
			<Header />
			{loading ?
				<h3 className='message'>🚀 Estamos cargando, awanta... 🐱‍🚀</h3>
			: null}
			
			{error ? (
				<div className='message'>
					<h3>{`😱 Hay un error en el servidor👇`}</h3>
					<h2><b>{`Status -> ${error}`}</b></h2>
				</div>
			) : null}

			{!loading && !schedules.there_are_combs ? 
			<div className='SplicedCards message'>
				<h3>{`😱 No existe ningún horario, estas dos materias se empalman 👇`}</h3>
					<SubjectCard
						subject={schedules?.result[0].NAME}
					/>
					<SubjectCard
						subject={schedules?.result[1].NAME}
					/>
			</div>
			: null}
			
			{!loading && schedules.there_are_combs ?
				<ScheduleSection
					schedules={schedules}
				/>
				: null}
			
		</div>
	)
}

export default SchedulesView