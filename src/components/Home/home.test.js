'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home'

describe('Test UI', () => {
  it('has the expected UI output', () => {
    const tree = renderer.create(<Home />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
