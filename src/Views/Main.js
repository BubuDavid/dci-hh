import React from 'react'
import './Main.css'
import Header from '../Components/Header/Header'
import SearchBar from '../Components/SearchBar/SearchBar'
import SubjectList from '../Components/SubjectListComponents/SubjectList/SubjectList'


// Main view for the route: /
function Main() {
	return (
		<div className='main'>
			<Header />
			<SearchBar />
			<SubjectList />
		</div>
	)
}

export default Main