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

  it("Page shows 3 guess letter boxes when word length 3 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("not.exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Page shows 4 guess letter boxes when word length 4 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click();
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Page shows 5 guess letter boxes when word length 5 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength5"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Page shows 6 guess letter boxes when word length 6 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength6"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("exist");
  });
});
