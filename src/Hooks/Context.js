import { createContext, useState } from "react"
import useFetchAPI from "./useFetchAPI"

const HHContext = createContext()

function HHProvider(props) {
	const [view, setView] = useState('main')

	const {
		data: subjectNames,
		loading: subjectNamesLoading,
		error: subjectNamesError
	} = useFetchAPI({ url: process.env.REACT_APP_API_NAMES_URL })
	
	const [selectedSubjects, setSelectedSubjects] = useState([])
	const [searchWord, setSearchWord] = useState("")

	const toggleSelectionSubject = (clickedSubject) => {
		let newSelectedSubjects = [...selectedSubjects]

		if (newSelectedSubjects.includes(clickedSubject)) {
			let index = newSelectedSubjects.indexOf(clickedSubject)
			newSelectedSubjects.splice(index, 1)
		} else {
			if (newSelectedSubjects.length <= 9)
				newSelectedSubjects.push(clickedSubject)
			else return false
		}

		setSelectedSubjects(newSelectedSubjects)
		return true
	}

	const goBack = () => {
		setView('main')
		setSearchWord('')
	}

	return (
		<HHContext.Provider value={{
			view, setView,
			subjectNames,
			subjectNamesLoading,
			subjectNamesError,
			selectedSubjects, setSelectedSubjects,
			searchWord, setSearchWord,
			toggleSelectionSubject,
			goBack
		}}>
		{ props.children }
	</HHContext.Provider>
	)
}

export default HHContext
export { HHProvider}