'use strict'
import React, { PureComponent } from 'react'
import styled from 'styled-components';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

import UserProfile from '../UserProfile/UserProfile'

class User extends PureComponent {

  render() {
    const {user} = this.props;
    return(
      <div className="container">
        <UserProfile user={user} />
      </div>
    )
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
