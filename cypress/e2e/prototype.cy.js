import json from "../../src/components/prototype/prototype.json"


describe('Prototype test', () => {
  it('should render each card', () => {
    cy.visit('http://localhost:5173/')

    cy.get('.card').should('have.length', json.length)
  })

  it("should render the text of the card", () => {
    cy.visit('http://localhost:5173/')

    cy.get('.card').each((card, index) => {
      cy.wrap(card).contains(json[index].text.split("|")[0])
    })
  })
})