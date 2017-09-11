'use strict'

import React, { PureComponent } from 'react'

import User from 'components/user'
import Header from 'components/header'

import './css/style.css'
import './css/normalize.css'

import {
  QueryRenderer,
  graphql,
} from 'react-relay'
import environment from './environment'
class App extends PureComponent {
  render () {
      const query = graphql`
      query appQuery($name: String!) {
        ...user
      }
      `
      const variables = {
        name: "brunorafael8"
      }
    return (
      <div>
      <Header/>
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <User data={props} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default App
