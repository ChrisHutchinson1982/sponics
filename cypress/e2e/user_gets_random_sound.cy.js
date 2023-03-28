import sounds from "../../sounds.json";

describe("User opens web app to select a random sound", () => {
  it("Page shows a random sound as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="mainContainer"]').click();

    cy.get('[data-cy="sound"]').each((x) => {
      expect(x.text()).to.be.oneOf(sounds);
    });
  });
  it("Page shows an other random sound when next button is selected", () => {
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
});
