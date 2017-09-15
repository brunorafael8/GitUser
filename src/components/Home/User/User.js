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
          <UserAvatar src={user.avatarUrl} alt="" />
          <UserName >{user.name}</UserName>
          <UserLogin >{user.login}</UserLogin>
          <span style={styles.UserBio} >{user.bio}</span>
          <span style={styles.UserCompany} >{user.company}</span>
          <span style={styles.UserLocation} >{user.location}</span>
          <Userlinks href={`mailto:${user.email}`} >{user.email}</Userlinks>
          <Userlinks href={user.websiteUrl} >{user.websiteUrl}</Userlinks>
          <UserOrganizaitons style={styles.organizations} >
            {
              user.organizations.edges.map( ({node}) => <a aria-label={node.login} href={node.url} key={node.id}  ><img src={node.avatarUrl} style={styles.UserOrganizaiton} /></a> )
            }
          </UserOrganizaitons>
          </UserDados>
        </UserCard>
      </div>
    )
  }
}
const UserCard = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: row;
  }
`
const UserDados = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding: 20px;
`
const UserOrganizaitons = styled.div`
  display: flex;

`
const UserAvatar = styled.img`
  width: 229px;
  height: 230px;
  @media (max-width: 500px) {
    width: 110px;
    height: 110px;
  }
`
const UserName = styled.span`
  color: '#24292e';
  font-size: 26px;
  media (max-width: 500px) {
    font-size: 16px;
  }
`
const UserLogin = styled.span`
  color: '#666';
  fontSize: 20px;
  media (max-width: 500px) {
    font-size: 14px;
  }
`
const Userlinks = styled.a`
  color: #0366d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  media (max-width: 500px) {
    font-size: 14px;

  }
`
const styles = {
  UserBio: {
    color: '#6a737d',
    fontSize: 14
  },
  UserCompany: {
    color: '#24292e',
    fontSize: 14,
    fontWeight: 600
  },
  UserLocation: {
    color: '#24292e',
    fontSize: 14
  },
  UserOrganizaiton: {
    width: 30,
    height: 30
  }
}
export default createFragmentContainer(
  User,
  graphql`
    fragment User_user on User {
      avatarUrl
      name
      login
      bio
      company
      location
      email
      websiteUrl
			organizations(first: 10){
			  edges {
			    node {
			    	id
			    	avatarUrl
            teamsUrl
            url
            login
			    }
        }
      }
    }
  `,
);
