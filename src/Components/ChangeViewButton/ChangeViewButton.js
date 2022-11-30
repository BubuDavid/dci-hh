import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import './ChangeViewButton.css'

function ChangeViewButton({view, text, active}) {
	const {
		selectedSubjects,
		setView
	} = useContext(HHContext)

	return (
		<button
			className={'ChangeViewButton' + (selectedSubjects.length || active > 0 ? ' active' : '')}
			onClick={(e) => { setView(view)}}
		>
			{text}
		</button>
	)
}

export default ChangeViewButton