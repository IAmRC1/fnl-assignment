import React from 'react'
import BreadcrumbsList from './BreadcrumbsList'

describe('<BreadcrumbsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<BreadcrumbsList />)
  })
})