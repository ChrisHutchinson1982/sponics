import Qwerty from "./Qwerty";

describe("Qwerty", () => {
  let storeMock;
  const qwerty = "qwertyuiopasdfghjklzxcvbnm⌫";

  it("Renders component with qwerty keyboard", () => {
    storeMock = cy.stub();

    cy.mount(<Qwerty store={storeMock} />);

    qwerty.split("").forEach((char) => {
      cy.get(`[data-cy="qwerty${char}"]`).should("exist");
    });
  });
});
