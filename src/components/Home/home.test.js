'use strict'

import React from 'react'
import renderer from 'react-test-renderer'
import Home from './Home'

it('Should Title match to snapshot', () => {
  const tree = renderer.create(<Title>Título</Title>).toJSON()
  expect(tree).toMatchSnapshot()
})
