import React from 'react'
import { useContext } from 'react'
import SubjectItem from '../SubjectItem/SubjectItem'
import HHContext from '../../../Hooks/Context'
import './SubjectList.css'

function SubjectList() {
	const {
		subjectNamesLoading: loading,
		subjectNamesError: error,
		subjectNames,
		searchWord
	} = useContext(HHContext)

	console.log('rendering')
	
	return (
		<section className='SubjectListSection'>
			<ul className='SubjectList'>

				{loading && <h3>🚀 Estamos cargando, awanta... 🐱‍🚀</h3>}
				
				{error && (
					<div>
						<h3>{`😱 Hay un error en el servidor👇`}</h3>
						<h2><b>{`Status -> ${error}`}</b></h2>
					</div>
				)}
				
				{subjectNames?.filter(subject => subject.includes(searchWord)).map((subject, key) => (
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