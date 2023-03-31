import sounds from "../../sounds.json";

describe("User opens web app to select a random sound", () => {
  it("Shows a random sound as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="mainContainer"]').click();

    cy.get('[data-cy="sound"]').each((x) => {
      expect(x.text()).to.be.oneOf(sounds);
    });
  });
  it("Shows an other random sound when next button is selected", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="mainContainer"]').click();

    cy.get('[data-cy="sound"]').each((x) => {
      expect(x.text()).to.be.oneOf(sounds);
    });

    cy.get('[data-cy="nextButton"]').click();

    cy.get('[data-cy="sound"]').each((x) => {
      expect(x.text()).to.be.oneOf(sounds);
    });
  });

  it("Clears guess component boxes when next button is selected", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="mainContainer"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "s" });

    cy.get('[data-cy="nextButton"]').click();

    cy.get('[data-cy="guessLetter1"]').should("not.contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("not.contain.text", "s");
  });
});
