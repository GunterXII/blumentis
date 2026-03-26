import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./i18n/i18n.js";

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)