import { useContext } from 'react'
import { CCContext } from '../CalendarsContext'

import './CountBtnsSection.css'

export default function CountBtnsSection() {
	const {
		current,
		setCurrentFixed
	} = useContext(CCContext)

	const changeSchedule = (newCurrent) => {
		setCurrentFixed(newCurrent)
		const currentBtn = document.getElementById('currentBtn')
		const currentSummary = document.getElementById('currentSummary')
		currentBtn.classList.add('Changed')
		currentSummary.classList.add('Changed')
		setTimeout(() => {
			currentBtn.classList.remove('Changed')
			currentSummary.classList.remove('Changed')
		}, 100)
	}
	return (
		<div className='CountBtnsSection'>
			<div
				className='CountBtn'
				onClick={() => changeSchedule(current - 1)}
			>👈</div>
			<div
				className='CurrentBtn'
				id='currentBtn'
			>Horario {current}</div>
			<div
				className='CountBtn'
				onClick={() => changeSchedule(current + 1)}
			>👉</div>
		</div>
	)
}
