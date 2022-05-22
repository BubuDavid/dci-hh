import { useContext } from "react"

import HHContext from "../../../Context"

export default function BeesCounter() {
	const {
		yourSubjects,
		overflowSubjects,
	} = useContext(HHContext)
	let className = 'BeesCounter'
	if (overflowSubjects) className = 'BeesCounter Error'
	const counting10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<div className={className}>
			{counting10.map((_, index) => {
				return (
					<span
						className="BeesCounterIcon"
						key={index}
						style={{
							opacity: index < yourSubjects.length ? 1 : 0.2
						}}
					>
						🐝
					</span>
				)
			})}
		</div>
	)
}
