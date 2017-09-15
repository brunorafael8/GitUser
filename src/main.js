'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {BrowserRouter} from 'react-router-dom'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <BrowserRouter>
      <AppContainer>
        <NextApp />
      </AppContainer>
    </BrowserRouter>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
