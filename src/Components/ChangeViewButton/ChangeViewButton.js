import React, { useContext } from 'react'
import HHContext from '../../Hooks/Context'
import './ChangeViewButton.css'

function ChangeViewButton({view, text, active, size}) {
	const {
		selectedSubjects,
		setViewChangeSize
	} = useContext(HHContext)

	return (
		<button
			className={'ChangeViewButton' + (selectedSubjects.length || active > 0 ? ' active' : '')}
			onClick={(e) => { setViewChangeSize(view, size)}}
		>
			{text}
		</button>
	)
}

export default ChangeViewButton