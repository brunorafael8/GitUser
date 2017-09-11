'use strict'
import React, { PureComponent } from 'react'
import styled from 'styled-components';
import {
  createPaginationContainer,
  graphql
} from 'react-relay'
class User extends PureComponent {
  render() {
    const {query} = this.props.data
    return(
      <div className="container">
        <UserCard>
          <UserDados>
          <img src="" alt="" />
          <span>{query.user.name}</span>
          <span>brunorafael8</span>
          <span>brunorafael8.github.io</span>
          <span>BIO</span>
          <span>Entria</span>
          <span>Maceió</span>
          <span>Blog</span>
          </UserDados>
        </UserCard>
      </div>
    )
  }
}
const UserCard = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
`
const UserDados = styled.div`
  display: flex;
  flex-direction: column;
`
export default createPaginationContainer(User, graphql`
  fragment user on Query {
    user(login: $name) @connection(key: "query"){
      id
      name
      avatarUrl
    }
    }
  `,
    {
      getVariables(props, {name}, fragmentVariables) {
        return {name}
      }
    }
)

