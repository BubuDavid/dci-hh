import React from 'react'
import Main from '../../Views/Main'
import Stars from '../Stars/Stars'
import './App.css'

function App() {
	let view = 'main'

	return (
		<>
			{/* Star Background */}
			<Stars />

			{/* Views */}
			{/* Route: / */}
			{view === 'main' && (
				<Main />
			)}

		</>
	)
}

export default App