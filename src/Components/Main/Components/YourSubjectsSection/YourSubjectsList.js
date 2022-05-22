import { useContext } from "react"
import HHContext from "../../../Context"
import Subject from "../Subject"

export default function YourSubjectsList() {
	const {
		yourSubjects
	} = useContext(HHContext)
	return (
		<div
			className="YourSubjectList"
		>
			{yourSubjects.map((subject, key) => {
				return <Subject
					key={key}
					subject={subject}
				/>
			})}
		</div>
	)
}
