import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import HHContext from '../../Hooks/Context'
import useFetchAPI from '../../Hooks/useFetchAPI'
import ScheduleSection from '../../Components/ScheduleSectionComponents/ScheduleSection/ScheduleSection'
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

	console.log(schedules)

	return (
		<div className='SchedulesView'>
			<Header />
			{loading ?
				<h3>🚀 Estamos cargando, awanta... 🐱‍🚀</h3>
			: null}
			
			{error ? (
				<div className='errorMessage'>
					<h3>{`😱 Hay un error en el servidor👇`}</h3>
					<h2><b>{`Status -> ${error}`}</b></h2>
				</div>
			) : null}
			
			{!loading && schedules ?
				<ScheduleSection
					schedules={schedules}
				/>
			:null}

		</div>
	)
}

export default SchedulesView