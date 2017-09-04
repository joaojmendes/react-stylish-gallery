// @flow

import React from 'react'
import { ThemeProvider } from 'react-jss'

import Image from './image'


const StyledImage = (props: Object) => (
  <ThemeProvider theme={!props.modal ? { ...props.theme, overlayTitle: props.title } : { overlay: {}, image: {} } }>
    <Image {...props} />
  </ThemeProvider>
)


export default StyledImage
