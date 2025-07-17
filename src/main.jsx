import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Food from './about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Food />
  </StrictMode>,
)
