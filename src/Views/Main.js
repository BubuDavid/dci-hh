import React from 'react'
import './Main.css'
import Header from '../Components/Header/Header'
import SubjectList from '../Components/SubjectListComponents/SubjectList/SubjectList'


// Main view for the route: /
function Main() {
	return (
		<div className='main'>
			<Header />
			<SubjectList />
		</div>
	)
}

export default Main