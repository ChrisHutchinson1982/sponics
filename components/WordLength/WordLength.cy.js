import WordLength from "./WordLength";

describe("WordLength", () => {
  it("Renders component with 4 buttons", () => {
    cy.mount(<WordLength />);

    cy.get('[data-cy="wordLength3"]').should("contain.text", "3");
    cy.get('[data-cy="wordLength4"]').should("contain.text", "4");
    cy.get('[data-cy="wordLength5"]').should("contain.text", "5");
    cy.get('[data-cy="wordLength6"]').should("contain.text", "6");
  });
});
