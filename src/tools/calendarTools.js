function generateDayList(schedule) {
	let weekDays = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES']
	let extraDays = ['SABADO', 'DOMINGO']
	// Check if Saturnday or Sunday exists
	for (const subject of schedule) {
		for (let i = 1; i < 4; i++) {
			let day = subject[`DAY${i}`]
			for (const extraDay of extraDays)
				if (day?.includes(extraDay) && !weekDays.includes(extraDay))
					weekDays.push(extraDay)
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
		let nMaxDays = 6
		for (let i = 1; i <= nMaxDays; i++) {
			if (!subject[`DAY/TIME/ROOM${i}`]) break
			if (!subject[`TIME${i}`]) break

			let lowTime = subject[`TIME${i}`].split('-')[0]
			let highTime = subject[`TIME${i}`].split('-')[1]
			if (lowTime < lowerTime) lowerTime = lowTime
			if (highTime > upperTime) upperTime = highTime

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

function getColumn(nameDay) {
	let weekDays = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']
	for (let i = 0; i < weekDays.length; i++) {
		if (nameDay.includes(weekDays[i]))
			return i + 1
	}
}

function getRow(time, timeSlots) {
	if (!time) return time

	let start = time.split('-')[0]
	start = Number(start)

	for (let i = 0; i < timeSlots.length; i++) {
		const timeSlotHour = Number(timeSlots[i].split(':')[0])
		if (timeSlotHour >= start) {
			if (timeSlotHour === start) return (i * 60) !== 0 ? i * 60 : 1
			else {
				let startRow = i * 60
				let fractionRow = start - Math.floor(start)
				startRow += fractionRow * 100

				return startRow !== 0 ? startRow : 1
			}
		}
	}
}

function fromHourToNumber(hour) {
	if (hour.includes(':')) {
		let hourNumber = Number(hour.split(':')[0])
		let fraction = Number(hour.split(':')[1]) / 60
		return hourNumber + fraction
	} 

	return Number(hour)
}

function getHeight(time) {
	if (!time) return time

	let start = time.split('-')[0]
	let end = time.split('-')[1]
	
	// transform start and end to number
	start = fromHourToNumber(start)
	end = fromHourToNumber(end)

	console.log(start, end)
	
	let diff = end - start
	return diff * 60
}

function getWidth(column, nColumns) {
	return 100 / (nColumns - (column - 1)) * 1 // The *1 is the Scala factor you can change it
}

function getName(name, widthCheck) {
	let words = name.split(" ")
	if (words.length >= 3 || widthCheck) {
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

function getProfessors(temp, sub) {
	let nProfessors = 6
	for (let i = 0; i < nProfessors; i++) {
		if (sub[`PROFESSOR${i + 1}`])
			temp[`PROFESSOR${i + 1}`] = getProfessor(sub[`PROFESSOR${i + 1}`])
	}
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

function getEventsForCalendar(schedule, timeSlots, nColumns, widthCheck) {
	const events = []
	let colors = [
		'#2B3467',
		'#460C68',
		'#7F167F',
		'#251749',
		'#453C67',
		'#0E5E6F',
		'#404258',
		'#4C0033',
		'#790252',
		'#371B58',
		'#ECB365',
		'#1E5128',
		'#39311D',
	]

	for (const subject of schedule) {
		let color = getColor(colors)
		let nMaxDays = 6


		for (let dayIndex = 1; dayIndex < nMaxDays; dayIndex++) {
			if (!subject[`DAY/TIME/ROOM${dayIndex}`]) break
			if (!subject[`TIME${dayIndex}`] || !subject[`DAY${dayIndex}`]) break

			let tempSubject = {}
			tempSubject.NAME = getName(subject.NAME, widthCheck)
			tempSubject.GROUP = subject.GROUP
			getProfessors(tempSubject, subject)
			const [
				newTime,
				newRoom
			] = getDayDescription(subject[`DAY/TIME/ROOM${dayIndex}`])

			tempSubject.TIME = newTime
			tempSubject.ROOM = newRoom
			

			// -------- Get position -------- //
			// Get column
			tempSubject.column = getColumn(subject[`DAY${dayIndex}`])
			// Get row
			let time = subject[`TIME${dayIndex}`]
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