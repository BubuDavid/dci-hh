import { useContext } from 'react'
import HHContext from '../Context'
import { CCProvider } from './Components/CalendarsContext'
import CloseCalendarsBtn from './Components/CloseCalendarsBtn'
import CountBtnsSection from './Components/CountBtnsSection'
import ScheduleSummary from './Components/ScheduleSummary'
import Calendar from './Components/Calendar'
import NotFoundMessage from './Components/NotFoundMessage'

import './Calendars.css'

export default function Calendars() {
	const {
		schedules
	} = useContext(HHContext)

	return (
		<CCProvider>
			<CloseCalendarsBtn />
			{schedules?.length > 0 && (
				<>
					<CountBtnsSection />
					<ScheduleSummary />
					<Calendar />
				</>
			)}

			{schedules?.length <= 0 && (
				<NotFoundMessage />
			)}
		</CCProvider>
	)
}
