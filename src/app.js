'use strict'

import React, { Component } from 'react'
import Loadable from 'react-loadable'

import './css/normalize.css'
import './css/style.css'

const App = Loadable({
  loader: () => import('./components/Home/Home'),
  loading: () => <h1>Loading...</h1>
});


export default () => <App />;
