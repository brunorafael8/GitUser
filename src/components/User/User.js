'use strict'
import React, { PureComponent } from 'react'
import styled from 'styled-components';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
class User extends PureComponent {
  render() {
    const {user} = this.props;
    return(
      <div className="container">
        <UserCard>
          <UserDados>
          <img src={user.avatarUrl} alt="" />
          <span>{user.name}</span>
          <span>{user.login}</span>
          <span>brunorafael8.github.io</span>
          <span>BIO</span>
          <span>Entria</span>
          <span>{user.location}</span>
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
export default createFragmentContainer(
  User,
  graphql`
    fragment User_user on User {
      avatarUrl
      name
      login
      location
    }
  `,
);
