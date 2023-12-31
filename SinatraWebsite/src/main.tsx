import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import Navbar from './components/Header/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
  </React.StrictMode>,
)
