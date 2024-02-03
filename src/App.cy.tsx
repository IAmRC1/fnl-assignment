import App from './App'

describe('<App />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get('[data-cy=title]').should('have.text', 'Gallery')
    cy.get('[data-cy=footer]').should('have.text', 'Made with ☕ for Founder & Lightning')
  })
})