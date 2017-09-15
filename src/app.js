'use strict'

import React, { PureComponent } from 'react'
import Loadable from 'react-loadable'

import './css/style.css'
import './css/normalize.css'

function MyLoadingComponent () {
  return <div>Loading...</div>
}

const Home = Loadable({
  loader: () => import('./components/Home/Home'),
  loading: MyLoadingComponent
})

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}


export default App
