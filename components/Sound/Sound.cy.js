import Sound from "./Sound";

describe("Sound", () => {
  it("Renders component with ng when mounted with ng", () => {
    cy.mount(<Sound sound={"ng"} />);

    cy.get('[data-cy="sound"]').should("exist");
    cy.get('[data-cy="sound"]').should("contain.text", "ng");
  });
});
