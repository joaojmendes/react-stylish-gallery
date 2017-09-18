// @flow

import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import teal from 'material-ui/colors/teal'

import Navigation from './navigation'
import Description from './description'
import Examples from './examples'
import FabButtons from './fab'

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div>
      <FabButtons />
      <Navigation />
      <Description />
      <Examples />
    </div>
  </MuiThemeProvider>
)

export default App
