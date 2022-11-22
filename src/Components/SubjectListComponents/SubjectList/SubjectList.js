import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SubjectItem from '../SubjectItem/SubjectItem'
import useFetchAPI from '../../../Hooks/useFetchAPI'
import './SubjectList.css'

function SubjectList() {
	const {
		data: subjectNames,
		loading,
		error
	} = useFetchAPI({url:process.env.REACT_APP_API_NAMES_URL})
	
	// We need the displayed subjects because if we filter over the originals information will be lost
	const [displayedSubjects, setDisplayedSubjects] = useState([])

	// We need to initialize this displayedSubjects state with a useEffect because the
	// fetch function is asyncronous. So we need to change displayedSubjects as subjectNames changes
	useEffect(() => {
		setDisplayedSubjects(subjectNames)
	}, [subjectNames])
	

	return (
		<section className='SubjectListSection'>
			<ul className='SubjectList'>

				<SearchBar
					subjects={subjectNames}
					setDisplaySubjects = {setDisplayedSubjects}
				/>
				{loading && <h3>🚀 Estamos cargando, awanta... 🐱‍🚀</h3>}
				
				{error && (
					<div>
						<h3>{`😱 Hay un error en el servidor👇`}</h3>
						<h2><b>{`Status -> ${error}`}</b></h2>
					</div>
				)}
				
				{displayedSubjects &&
					displayedSubjects?.map((subject, key) => (
						<SubjectItem
							key={key}
							subject={subject}
						/>
				))}

			</ul>
		</section>
	)
}

export default SubjectList