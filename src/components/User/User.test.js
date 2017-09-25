'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import User from './User'

import { QueryRenderer, graphql } from 'react-relay'

import environment from '../../environment'

describe('Test UI UserProfile', () => {
  it('The component UserProfile has the expected UI output', () => {
    const query = graphql`
    query UserQuery {
      user (login: "brunorafael8") {
        ... User_user
      }
    }
    `;
    const tree = renderer.create(
      <QueryRenderer
      environment={environment}
      query={query}
      render={({ error, props }) => {
        if (error) console.error(new Error(error));

        if (props) {
          return <User user={props.user} />
        } else {
          return <div>loading ...</div>
        }
      }}
    />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
