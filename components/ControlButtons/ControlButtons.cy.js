import ControlButtons from "./ControlButtons";

describe("Button", () => {
  let storeMock;

  it("Renders component with submit and reset buttons when mounted", () => {
    storeMock = cy.stub();

    cy.mount(<ControlButtons store={storeMock} />);

    cy.get('[data-cy="submitButton"]').should("exist");
    cy.get('[data-cy="resetButton"]').should("exist");
  });
});
