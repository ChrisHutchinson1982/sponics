describe("User opens web app to select word length", () => {
  it("Page shows 4 guess letter boxes as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Page shows 3 guess letter boxes when word lenth 3 is selected", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click;

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });
});
