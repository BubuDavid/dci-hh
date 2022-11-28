import React from 'react'
import './Main.css'
import Header from '../../Components/Header/Header'
import SearchBar from '../../Components/SearchBar/SearchBar'
import SubjectList from '../../Components/SubjectListComponents/SubjectList/SubjectList'
import SubjectCounter from '../../Components/SubjectListComponents/SubjectCounter/SubjectCounter'
import MakeSchedulesButton from '../../Components/SubjectListComponents/MakeSchedulesButton/MakeSchedulesButton'


// Main view for the route: /
function Main() {
	return (
		<div className='Main'>
			<Header />
			<SearchBar />
			<div className='SubmitSection'>
				<SubjectCounter />
				<MakeSchedulesButton />
			</div>
			<SubjectList />
		</div>
	)
}

export default Main