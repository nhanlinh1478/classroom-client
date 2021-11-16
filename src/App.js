import React from 'react'
import Router from './components/Routes'
import { CssBaseline } from '@mui/material'
import './app.css'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router />
    </div>
  )
}

export default App
