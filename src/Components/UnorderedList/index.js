import './UnorderedList.css'

export default function UnorderedList({ children, disc }) {
	return (
		<ul className='UnorderedList' style={{
			listStyleType: disc ? 'disc' : 'none',
			paddingLeft: disc ? '1rem' : '0'
		}}>
			{children}
		</ul>
	)
}
