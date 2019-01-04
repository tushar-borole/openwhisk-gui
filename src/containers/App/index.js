import React, { Component }   from 'react'
import {  MuiThemeProvider  } from '@material-ui/core/styles'
import theme                  from 'configs/config-theme'
import Home                 from 'components/Home/Paperbase'
// import { appConfig }          from 'configs/config-main'

// global styles for entire app
import './styles.scss'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Home />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
