import Guess from "./Guess";

describe("Guess", () => {
  it("Renders component with 4 boxes when mounted with 4 wordLength", () => {
    cy.mount(<Guess wordLength={4} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Renders component with 3 boxes when mounted with 3 wordLength", () => {
    cy.mount(<Guess wordLength={3} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("not.exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Renders component with 5 boxes when mounted with 5 wordLength", () => {
    cy.mount(<Guess wordLength={5} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });
});
