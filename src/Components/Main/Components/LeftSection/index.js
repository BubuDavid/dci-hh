import './LeftSection.css'

export default function LeftSection({ children }) {
	return (
		<div className='Section active' id='LeftSection'>
			{children}
		</div>
	)
}
