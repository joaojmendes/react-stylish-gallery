// @flow

import React from 'react'
import { ThemeProvider } from 'react-jss'

import Image from './image'

const checkForTheme = (props) => {
  if (props.theme) {
    if (!props.modal) return { ...props.theme }
    return { overlay: {}, image: {} }
  }
  return { overlay: {}, image: {} }
}

const StyledImage = (props: Object) => (
  <ThemeProvider theme={checkForTheme(props)}>
    <Image {...props} />
  </ThemeProvider>
)


export default StyledImage
