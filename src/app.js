'use strict'

import React, { PureComponent } from 'react'

import User from 'components/User/User'
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
      query appQuery ($login: String!) {
        user (login: $login) {
          ...User_user
        }
      }
    `;
      const variables = {
        login: "brunorafael8"
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
              return <User user={props.user} />
            }
            return <div>Loading</div>
          }}
        />
      </div>
    )
  }
}

export default App
