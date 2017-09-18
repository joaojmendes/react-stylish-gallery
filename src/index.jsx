// @flow

import React from 'react'
import { render } from 'react-dom'
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader'

import App from './app'

const document = window.document

const test = () => {
  const element = document.createElement('div')
  element.setAttribute('id', 'root')
  return element
}
document.body.appendChild(test())

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root'),
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const NextApp = require('./app').default
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root'),
    )
  })
}
