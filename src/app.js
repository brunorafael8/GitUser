'use strict'

import React, { PureComponent } from 'react'
import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import Home from 'components/home'

import './css/style.css'
import './css/normalize.css'


class App extends PureComponent {
  render () {
    return (
      <div>
       <Home />
      </div>
    )
  }
}

export default App
