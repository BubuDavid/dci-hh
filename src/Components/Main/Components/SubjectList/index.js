import { useContext } from 'react'

import HHContext from '../../../Context'
import Subject from '../Subject'

import './SubjectList.css'

export default function SubjectList() {
	const {
		subjects,
		subjectName,
		superNormalize
	} = useContext(HHContext)
	return (
		<div className='SubjectList'>
			{subjects.map((subject, key) => {
				const passSubjectNameNorm = superNormalize(subjectName)
				const subjectNameNorm = superNormalize(subject.NAME)
				if (subjectNameNorm.includes(passSubjectNameNorm))
					return (
						<Subject
							key={key}
							subject={subject}
						/>
					)
			})}
		</div>
	)
}
