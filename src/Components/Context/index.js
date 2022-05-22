import React, { useState } from "react"
import { useFetchAirtableData } from "./customHooks"

const HHContext = React.createContext()

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
const AIRTABLE_TABLE_URL = process.env.REACT_APP_AIRTABLE_TABLE_URL


const requestParams = {
	url: AIRTABLE_TABLE_URL,
	headers: {
		'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	method: 'GET'
}

function HHProvider(props) {
	const {
		data: subjects,
		setData: setSubjects,
		fetchError,
		fetchLoading,
	} = useFetchAirtableData([], requestParams)
	const [openModal, setOpenModal] = useState(false)
	const [schedules, setSchedules] = useState([])
	const [subjectName, setSubjectName] = useState("")
	const [overflowSubjects, setOverflowSubjects] = useState(false)
	
	const toggleSelectSubject = (id) => {
		const indexSubject = subjects.findIndex(subject => subject._ID === id)
		const newSubjects = [...subjects]
		if (yourSubjects.length === 10 && !newSubjects[indexSubject].selected) {
			return false
		}
		newSubjects[indexSubject].selected = !newSubjects[indexSubject].selected
		setSubjects(newSubjects)

		return true
	}
	const yourSubjects = subjects.filter(subject => subject.selected)

	const superNormalize = (s) => {
		return s.normalize('NFC').toUpperCase()
	}

	const toggleView = (viewClassName) => {
		const rightSection = document.getElementById('RightSection')
		const leftSection = document.getElementById('LeftSection')
		if (viewClassName === 'L') {
			leftSection.classList.add('active')
			rightSection.classList.remove('active')
		}
		if (viewClassName === 'R') {
			leftSection.classList.remove('active')
			rightSection.classList.add('active')
		}
	}
	
	return (
		<HHContext.Provider value={{
			fetchError,
			fetchLoading,
			subjects,
			subjectName,
			setSubjectName,
			toggleSelectSubject,
			yourSubjects,
			openModal,
			setOpenModal,
			schedules,
			setSchedules,
			superNormalize,
			overflowSubjects,
			setOverflowSubjects,
			toggleView
		}}>
			{ props.children }
		</HHContext.Provider>
	)
}

export default HHContext
export { HHProvider };