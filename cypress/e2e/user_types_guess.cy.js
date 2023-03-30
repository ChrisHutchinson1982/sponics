describe("User types guess", () => {
  it("Guess shows in guess component boxes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "s" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });

  it("Guess letter is removed from component box when Backspace is pressed", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "Backspace" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "e");
  });

  it("Guess component box does not show non-letter values", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "1" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "2" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "=" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "/" });

    cy.get('[data-cy="guessLetter1"]').should("not.contain.text", "1");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "2");
    cy.get('[data-cy="guessLetter3"]').should("not.contain.text", "=");
    cy.get('[data-cy="guessLetter4"]').should("not.contain.text", "/");
  });

  it("Guess shows in guess component boxes in lowercase", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "T" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "E" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "S" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "T" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });

  it("Results shows as correct when word is spelt correctly, is correct length and contains sound", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "n" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "k" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "a");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "n");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "k");

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "Enter" });

    cy.get('[data-cy="resultMessage"]').should("contain.text", "✓");
  });
});
