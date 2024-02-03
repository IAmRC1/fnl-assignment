import React from 'react'
import Photos from './Photos'

describe('<Photos />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Photos />)
  })
})