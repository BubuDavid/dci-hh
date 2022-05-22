function generateDayList(schedule) {
	let weekDays = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES']
	// Check if Saturnday or Sunday exists
	for (const subject of schedule) {
		for (let i = 1; i < 4; i++) {
			let day = subject[`day${i}`]
			let extraDays = { 'SABADO': 'SÁBADO', 'DOMINGO':'DOMINGO'}
			for (const [key, value] of Object.entries(extraDays))
				if (day?.includes(key) && !weekDays.includes(value))
					weekDays.push(value)
		}
	}

	return weekDays
}
function generateTimeSlots(schedule) {
	let timeSlots = []
	let lowerTime = 8
	let upperTime = 19
	// Check the limits (upper and lowe)
	for (const subject of schedule) {
		for (const timeZone of subject.time_zones) {
			let timeRange = timeZone.time_range
			if (timeRange.low < lowerTime) lowerTime = timeRange.low
			if (timeRange.high > upperTime) upperTime = timeRange.high
		}
	}

	for (let t = lowerTime; t < upperTime; t++) {
		timeSlots.push(`${t}:00`)
	}

	return timeSlots
}

function getTableParams(schedule) {
	const weekDays = generateDayList(schedule)
	const timeSlots = generateTimeSlots(schedule)

	return {
		weekDays,
		timeSlots
	}
}

function getColumn(time) {
	let weekDays = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
	let nameDay = time.day
	for (let i = 0; i < weekDays.length; i++) {
		if (nameDay.includes(weekDays[i]))
			return i + 1
	}
}

function getRow(time, timeSlots) {
	let start = time.time_range.low

	for (let i = 0; i < timeSlots.length; i++) {
		const timeSlotHour = Number(timeSlots[i].split(':')[0])
		if (timeSlotHour >= start) {
			if (timeSlotHour === start) return i * 60 !== 0 ? i * 60 : 1
			else {
				let startRow = i * 60
				let fractionRow = start - Math.floor(start)
				startRow += fractionRow * 100

				return startRow
			}
		}
	}
}

function getHeight(time) {
	let start = time.time_range.low
	let end = time.time_range.high
	let diff = end - start
	return diff * 60
}

function getWidth(column, nColumns) {
	return 100 / (nColumns - (column - 1)) * 0.85
}

function getName(name) {
	let words = name.split(" ")
	if (words.length >= 3) {
		let newName = ''
		for (const word of words) {
			newName += word[0].toUpperCase() + '.'
		}
		return newName
	}

	return name
}

function getProfessor(name) {
	if(!name) return name
	let words = name.split(" ")

	if (name.length >= 25) {
		return words[words.length - 1] + ' ' + words[words.length - 2]
	}


	return name
}

function getDayDescription(day) {
	if (!day) return day
	let info = day.split("/")

	if (info[2].length >= 4)
		info[2] = info[2][info[2].length - 1]

	return [info[1], info[2]]
}

function getColor(colors) {
	let colorIndex = Math.floor(Math.random() * colors.length)
	let color = colors[colorIndex]
	colors.splice(colorIndex, 1)
	return color
}

function getEventsForCalendar(schedule, timeSlots, nColumns) {
	const events = []
	let colors = [
		'#7D1E6A',
		'#6A67CE',
		'#F73D93',
		'#5F7161',
		'#541690',
		'#FF4949',
		'#205375',
		'#006E7F',
		'#005555',
		'#FF8C32'
	]
	for (const subject of schedule) {
		let color = getColor(colors)
		let dayIndex = 1
		for (const time of subject.time_zones) {
			let tempSubject = {}
			// -------- Get info -------- //
			tempSubject.name = getName(subject.name)
			tempSubject.group = subject.group
			tempSubject.professor1 = getProfessor(subject.professor1)
			tempSubject.professor2 = getProfessor(subject.professor2)
			const [
				newTime,
				newRoom
			] = getDayDescription(subject[`day${dayIndex}`])
			tempSubject.time = newTime
			tempSubject.room = newRoom
			dayIndex++
			// -------- Get position -------- //
			// Get column
			tempSubject.column = getColumn(time)
			// Get row
			tempSubject.row = getRow(time, timeSlots)
			// -------- Get size -------- //
			// Get height
			tempSubject.height = `${getHeight(time)}px`
			// Get width
			tempSubject.width = `${getWidth(tempSubject.column, nColumns)}%`
			// Get color
			tempSubject.color = color
			// -------- Add to array -------- //
			events.push(tempSubject)
		}
	}

	return events
}


export {getTableParams, getEventsForCalendar}