'use strict'
user 
import React, { PureComponent } from 'react'
import styled from 'styled-components';

class User extends PureComponent {
  render() {
    return(
      <div className="container">
        <UserCard>
          <UserDados>
          <img src="" alt="" />
          <span>Bruno Rafael</span>
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
export default User
