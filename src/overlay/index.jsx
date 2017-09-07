
import React from 'react'
import { ThemeProvider } from 'react-jss'

import Overlay from './overlay'

const checkForTheme = (props) => {
  if (props.theme) return { ...props.theme, overlayTitle: props.title }
  return { overlayTitle: props.title }
}

const StyledOverlay = (props: Object) => (
  <ThemeProvider theme={checkForTheme(props)}>
    <Overlay {...props} />
  </ThemeProvider>
)


export default StyledOverlay
