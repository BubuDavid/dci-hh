import { useState, useEffect } from "react"

function useFetchAirtableData(initialValue, requestParams) {
	const [fetchError, setSetchError] = useState(false)
	const [fetchLoading, setFetchLoading] = useState(true)
	const [data, setData] = useState(initialValue)

	useEffect(() => {
		try {

			async function fetchData({ url, headers }) {
				let fetching = true
				let records = []
				while (fetching) {
					const response = await fetch(url, {
						headers: headers
					})
					const jsonResponse = await response.json()
					records.push(...jsonResponse.records)
					if (!jsonResponse.offset) fetching = false
					else {
						url = url.split('&offset')[0]
						url += `&offset=${jsonResponse.offset}`
					}
				}
				setData(records.map(record => record.fields))
				setFetchLoading(false)
			}
			fetchData(requestParams)
		} catch (error) {
			setSetchError(error)
		}
	}, [requestParams])
	
	return {
		fetchError,
		fetchLoading,
		data,
		setData
	}
}

function useCallHHAPI(schedules, setSchedules) {
	// States
	const [scheduleLoading, setScheduleLoading] = useState(false)
	const [scheduleError, setScheduleError] = useState(false)
	// API call function
	const makeSchedules = async (url, body_request) => {
		setScheduleLoading(true)
		try {
				const response = await fetch(url, {
				method: "POST",
				mode:"cors",
				headers: {
					"Content-type": "application/json",
					'Accept': 'application/json'
				},
				body: JSON.stringify(body_request)
			})
			
			const jsonResponse = await response.json()
			setSchedules(jsonResponse)
		} catch (error) {
			setScheduleError(error)
		}
		setScheduleLoading(false)
	}

	return {
		scheduleLoading,
		scheduleError,
		makeSchedules
	}
}


export { useFetchAirtableData, useCallHHAPI }