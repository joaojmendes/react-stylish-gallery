// @flow

import React from 'react'
import { ThemeProvider } from 'react-jss'

import Modal from './modal'

const StyledModal = (props: Object) => (
  <ThemeProvider theme={{ ...props.theme }}>
    <Modal {...props} />
  </ThemeProvider>
)

export default StyledModal
