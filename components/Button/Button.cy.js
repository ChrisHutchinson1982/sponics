import Button from "./Button";

describe("Button", () => {
  let actionMock;

  it("Renders component with when mounted", () => {
    actionMock = cy.stub();

    cy.mount(
      <Button
        buttonType={{ name: "next", action: actionMock, width: 24 }}
        i={0}
      />
    );

    cy.get('[data-cy="nextButton"]').should("exist");
  });
});
