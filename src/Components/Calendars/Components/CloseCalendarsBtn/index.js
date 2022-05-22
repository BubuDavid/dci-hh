import { useContext } from 'react'
import HHContext from '../../../Context'

import './CloseCalendarsBtn.css'

export default function CloseCalendarsBtn() {
	const {
		setOpenModal,
		setSchedules,
		setSubjectName
	} = useContext(HHContext)
	return (
		<button
			className='CloseCalendarsBtn'
			onClick={() => {
				setOpenModal(false)
				setSchedules([])
				setSubjectName("")
			}}
		>
			<span>🙈</span><p>REGRESAR</p>
		</button>
	)
}
