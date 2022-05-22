import { useContext } from "react"
import { useCallHHAPI } from "../../../Context/customHooks"
import HHContext from "../../../Context"

import './MakeSchedulesBtn.css'

const fastAPIGetScheduleURL = process.env.REACT_APP_FASTAPI_API_URL_GET

export default function MakeSchedulesBtn() {
	const {
		yourSubjects,
		setOpenModal,
		schedules,
		setSchedules
	} = useContext(HHContext)
	const {
		makeSchedules
	} = useCallHHAPI(schedules, setSchedules)

	const makeSchedulesClick = async () => {
		let thisBtn = document.getElementById('SubmitButton')
				thisBtn.style.opacity = 0.3
				thisBtn.style.pointerEvents = 'none'
				let body_request = {
					"subjects": yourSubjects.map(subject => subject.NAME)
				}
				await makeSchedules(fastAPIGetScheduleURL, body_request)
				setOpenModal(true)
				thisBtn.style.opacity = 1
				thisBtn.style.pointerEvents = 'auto'
	}
	return (
		<button
			className="MakeSchedulesBtn"
			id={"SubmitButton"}
			onClick={async () => await makeSchedulesClick()}
			style={{
				opacity: yourSubjects.length ? '1' : '0.3',
				pointerEvents: yourSubjects.length ? 'auto' : 'none'
			}}
		>
			Hacer Horarios
		</button>
	)
}
