
import {Box,ThemeProvider,Typography} from '@mui/material'
import './App.css'
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './config/theme';
function App() {
  

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
       
        <Box>
          <Typography variant='link'>hello world!</Typography> 
        </Box>
      </ThemeProvider>

    </React.Fragment>
  )
}

export default App
