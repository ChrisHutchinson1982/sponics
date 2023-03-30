import Result from "./Result";

describe("Result", () => {
  it("Renders component with resultMessage", () => {
    cy.mount(<Result resultMessage="?" />);

    cy.get('[data-cy="resultMessage"]').should("contain.text", "?");
  });
});
