import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx';
import Popup from './components/Popup.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Popup name="Victory" age={20} percent="90"/>
    <Popup percent='79' name="Batubo" age={50}/>
  </StrictMode>,
)
