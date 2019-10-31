import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <> */}
    {/* <CSSReset /> */}
    <App />
    {/* </> */}
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
