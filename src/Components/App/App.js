import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import Main from '../../Views/Main/Main'
import Preview from '../../Views/Preview/Preview'
import ProfessorsView from '../../Views/ProfessorsView/ProfessorsView'
import SchedulesView from '../../Views/SchedulesView/SchedulesView'
import Footer from '../Footer/Footer'
import Stars from '../Stars/Stars'
import './App.css'

function App() {
	const {view} = useContext(HHContext)
	return (
		<>
			{/* Star Background */}
			<Stars />

			{/* Views */}
			{/* Route: / */}
			{view === 'main' && (
				<>
					<Main />
					<Footer />
				</>
			)}
			{view === 'preview' && (
				<>
					<Preview />
					<Footer />
				</>
			)}
			{view === 'professorsView' && (
				<>
					<ProfessorsView />
					<Footer />
				</>
			)}
			{view === 'schedulesView' && (
				<SchedulesView />
			)}

		</>
	)
}

export default App