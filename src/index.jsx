// @flow

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReactGA from 'react-ga'
import 'typeface-roboto'
import './style.css'

import App from './app'

const test = () => {
  const element = document.createElement('div')
  element.setAttribute('id', 'root')
  return element
}
document.body.appendChild(test())

ReactGA.initialize('UA-106758489-1')

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root')
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
