import Users from './Users'

describe('<Users />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Users />)
    // write a case where you get the users length to be 10
    cy.get('[data-cy=loader]').should('not.exist')
    cy.get('[data-cy=user-card]').should('have.length', 10)
  })
})