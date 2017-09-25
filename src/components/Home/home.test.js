'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home'

describe('Test UI Home', () => {
  it('The component Home has the expected UI output', () => {
    const tree = renderer.create(<Home />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
