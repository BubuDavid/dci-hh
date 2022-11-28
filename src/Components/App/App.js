import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import Main from '../../Views/Main/Main'
import Schedules from '../../Views/Schedules/Schedules'
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
			{view === 'schedules' && (
				<Schedules />
			)}

		</>
	)
}

export default App