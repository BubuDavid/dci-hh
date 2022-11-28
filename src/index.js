import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App'
import { HHProvider } from './Hooks/Context'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
		<HHProvider>
			<App />
		</HHProvider>
  </React.StrictMode>
)
