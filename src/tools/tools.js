function getNumberTimes(schedule) {
	let max_time = 0;
	schedule.forEach((subject, index) => {
		let counter = 0
		for (const key in subject) {
			if (key.includes('DAY/TIME/ROOM')) counter += 1
		}
		max_time = Math.max(max_time, counter)
	})

	return max_time
}

export {getNumberTimes}