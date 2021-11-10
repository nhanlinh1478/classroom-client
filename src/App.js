import React from 'react'
import Router from './components/Routes'
import { CssBaseline } from '@mui/material'
import './app.css'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'
const theme = createTheme({
  palette: {
    primary: {
      main: '#fe3',
    },
    secondary: purple,
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Router />
      </div>
    </ThemeProvider>
  )
}

export default App
