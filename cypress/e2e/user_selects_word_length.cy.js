describe("User opens web app to select word length", () => {
  it("and page shows 4 guess letter boxes as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });
});
