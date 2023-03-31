import Button from "./Button";

describe("Button", () => {
  let storeMock;

  it("Renders component with when mounted", () => {
    storeMock = cy.stub();

    cy.mount(<Button buttonType={["next", storeMock, 24]} i={0} />);

    cy.get('[data-cy="nextButton"]').should("exist");
  });
});
