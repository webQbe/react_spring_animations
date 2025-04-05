import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Remove StrictMode just for testing animation issues
  // <StrictMode>
      <App />
  // </StrictMode>,
)
