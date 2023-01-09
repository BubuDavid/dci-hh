import { createContext, useState } from "react"
import useFetchAPI from "./useFetchAPI"

const HHContext = createContext()

function HHProvider(props) {
	const [view, setView] = useState('main')
	const [bgSize, setBgSize] = useState('100')
	const [selectedProfessors, setSelectedProfessors] = useState({})

	const {
		data: subjectNames,
		loading: subjectNamesLoading,
		error: subjectNamesError
	} = useFetchAPI({ url: process.env.REACT_APP_API_NAMES_URL })
	
	const [selectedSubjects, setSelectedSubjects] = useState([])
	const [searchWord, setSearchWord] = useState("")

	const setViewChangeSize = (newView, newSize='100%') => {
		setView(newView)
		if (!newSize) setBgSize('100%')
		else setBgSize(newSize)
	}

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

	const toggleSelectionProfessor = (subject, clickedProfessor) => {
		let newSelectedProfessors = {...selectedProfessors}

		if (newSelectedProfessors[subject] && newSelectedProfessors[subject].includes(clickedProfessor)) {
			let index = newSelectedProfessors[subject].indexOf(clickedProfessor)
			newSelectedProfessors[subject].splice(index, 1)
		} else {
			if (newSelectedProfessors[subject] === undefined) {
				newSelectedProfessors[subject] = [clickedProfessor]
			} else {
				newSelectedProfessors[subject].push(clickedProfessor)
			}
		}


		setSelectedProfessors(newSelectedProfessors)
	}

	const goBack = () => {
		setView('main')
		setSearchWord('')
		setBgSize('100%')
	}

	return (
		<HHContext.Provider value={{
			view, setViewChangeSize,
			bgSize, setBgSize,
			subjectNames,
			subjectNamesLoading,
			subjectNamesError,
			selectedSubjects, setSelectedSubjects,
			searchWord, setSearchWord,
			toggleSelectionSubject,
			goBack,
			selectedProfessors, setSelectedProfessors, toggleSelectionProfessor
		}}>
		{ props.children }
	</HHContext.Provider>
	)
}

export default HHContext
export { HHProvider}