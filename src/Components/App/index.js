import { useContext } from 'react'

import HHContext from '../Context'
import { useCallHHAPI } from '../Context/customHooks'
import Calendars from '../Calendars'
import Main from '../Main'
import Modal from '../Modal'
import Header from '../Header'
import './App.css'

export default function App() {
	const {
		openModal
	} = useContext(HHContext)

	return (
		<>
			<Header />
			{/* Deploy our Main or our Modal */}
			{!openModal && (
				<Main />
			)}

			{/* Deploy our Main or our Modal */}
			{openModal && (
				<Modal>
					<Calendars />
				</Modal>
			)}
		</>
	)
}
