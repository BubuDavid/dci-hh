import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import Main from '../../Views/Main/Main'
import Preview from '../../Views/Preview/Preview'
import SchedulesView from '../../Views/SchedulesView/SchedulesView'
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
				<Main />
			)}
			{view === 'preview' && (
				<Preview />
			)}
			{view === 'schedulesView' && (
				<SchedulesView />
			)}

		</>
	)
}

export default App