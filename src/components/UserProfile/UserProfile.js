'use strict'
import React, { PureComponent } from 'react'
import styled from 'styled-components';

class UserProfile extends PureComponent {

  render() {
    const {user} = this.props;
    return(
      <Profile>
        <UserAvatar src={user.avatarUrl} alt="" />
        <UserName >{user.name}</UserName>
        <UserLogin >{user.login}</UserLogin>
        <UserBio >{user.bio}</UserBio>
        <UserCompany >{user.company}</UserCompany>
        <UserLocation >{user.location}</UserLocation>
        <Userlinks href={`mailto:${user.email}`} >{user.email}</Userlinks>
        <Userlinks href={user.websiteUrl} >{user.websiteUrl}</Userlinks>
        <UserOrganizaitons style={styles.organizations} >
          {
            user.organizations.edges.map( ({node}) => <a aria-label={node.login} href={node.url} key={node.id}  ><UserOrganizaiton src={node.avatarUrl} style={styles.UserOrganizaiton} /></a> )
          }
        </UserOrganizaitons>
      </Profile>
    )
  }
}

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  padding: 20px;
`
const UserAvatar = styled.img`
width: 229px;
height: 230px;
@media (max-width: 500px) {
  height: 110px;
  width: 110px;
}
`
const UserOrganizaitons = styled.div`
display: flex;

`
const UserName = styled.span`
color: '#24292e';
font-size: 26px;
@media (max-width: 500px) {
  font-size: 16px;
}
`
const UserLogin = styled.span`
color: '#666';
fontSize: 20px;
@media (max-width: 500px) {
  font-size: 14px;
}
`
const Userlinks = styled.a`
color: #0366d6;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
@media (max-width: 500px) {
  font-size: 14px;

}
`
const UserBio = styled.span`
  color: #6a737d;
  font-size: 14px;
`
const UserCompany = styled.span`
  color: #24292e;
  font-size: 14px;
  font-weight: 600px;
`
const UserLocation = styled.span`
  color: #24292e;
  fontSize: 14px;
`
const UserOrganizaiton = styled.img`
  width: 30px;
  height: 30px;
`


export default UserProfile;
