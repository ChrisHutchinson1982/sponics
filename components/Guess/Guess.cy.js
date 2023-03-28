import Guess from "./Guess";

describe("Guess", () => {
  it("Renders component with 4 boxes when mounted with 4 wordLength", () => {
    cy.mount(<Guess wordLength={4} guess={""} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Renders component with 3 boxes when mounted with 3 wordLength", () => {
    cy.mount(<Guess wordLength={3} guess={""} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("not.exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Renders component with 5 boxes when mounted with 5 wordLength", () => {
    cy.mount(<Guess wordLength={5} guess={""} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Renders component with 6 boxes when mounted with 6 wordLength", () => {
    cy.mount(<Guess wordLength={6} guess={""} />);

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("exist");
  });

  it("Renders component with 4 boxes with containing t e s t when mounted with 'test' guess", () => {
    cy.mount(<Guess wordLength={4} guess={"test"} />);

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });

  it("Renders component with 4 boxes with containing empty strings when mounted with '' guess", () => {
    cy.mount(<Guess wordLength={4} guess={""} />);

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "");
  });

  it("Renders component with 4 boxes with containing t e and 2 empty strings when mounted with 'te' guess", () => {
    cy.mount(<Guess wordLength={4} guess={"te"} />);

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "");
  });
});
