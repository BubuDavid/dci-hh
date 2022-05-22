import React, { createContext, useState, useContext } from "react"
import HHContext from "../../../Context"

const CCContext = createContext()

function CCProvider(props) {

	const [current, setCurrent] = useState(1)
	const {
		schedules,
		setSchedules
	} = useContext(HHContext)
	
	const setCurrentFixed = (newCurrent) => {
		if (newCurrent < 1) newCurrent = 1
		if (newCurrent > schedules.length) newCurrent = schedules.length
		setCurrent(newCurrent)
	}

	return (
		<CCContext.Provider value={{
			schedules,
			setSchedules,
			current,
			setCurrentFixed
		}}>
			{ props.children }
		</CCContext.Provider>
	)
}

export {CCContext, CCProvider}