import MakeSchedulesBtn from '../MakeSchedulesBtn'
import BeesCounter from './BeesCounter'
import YourSubjectsList from './YourSubjectsList'

import './YourSubjectsSection.css'

export default function YourSubjectsSection() {
	return (
		<div className='YourSubjectsSection'>
			<BeesCounter />
			<MakeSchedulesBtn />
			<YourSubjectsList />
		</div>
	)
}
