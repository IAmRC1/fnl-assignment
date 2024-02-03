import React from 'react'
import Albums from './Albums'

describe('<Albums />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Albums />)
  })
})