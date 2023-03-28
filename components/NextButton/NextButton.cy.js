import NextButton from "./NextButton";

describe("Nextbutton", () => {
  let storeMock;

  it("Renders component with when mounted", () => {
    storeMock = cy.stub();
    cy.mount(<NextButton store={storeMock} />);

    cy.get('[data-cy="nextButton"]').should("exist");
  });
});
