describe("User types guess", () => {
  it("Page shows guess in guess component boxes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "s" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });
});
