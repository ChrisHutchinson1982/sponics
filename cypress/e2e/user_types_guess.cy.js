describe("User types guess", () => {
  it("Guess shows in guess component boxes", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength4"]').click();

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

    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "Backspace" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "e");
  });

  it("Guess component box does not show non-letter values", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength4"]').click();

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

    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "T" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "E" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "S" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "T" });

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });

  it("Results shows 'Correct, well done' message and changes component to green when word is spelt correctly, is correct length and contains sound", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "n" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "k" });

    cy.get('[data-cy="guessLetter1"]').should(
      "contain.text",
      "t",
      "have.css",
      "background-color",
      "rgb(22, 163, 74)"
    );
    cy.get('[data-cy="guessLetter2"]').should(
      "contain.text",
      "a",
      "have.css",
      "background-color",
      "rgb(22, 163, 74)"
    );
    cy.get('[data-cy="guessLetter3"]').should(
      "contain.text",
      "n",
      "have.css",
      "background-color",
      "rgb(22, 163, 74)"
    );
    cy.get('[data-cy="guessLetter4"]').should(
      "contain.text",
      "k",
      "have.css",
      "background-color",
      "rgb(22, 163, 74)"
    );

    cy.get('[data-cy="submitButton"]').click();

    cy.get('[data-cy="resultMessage"]').should(
      "contain.text",
      "Correct, well done!",
      "have.css",
      "color",
      "rgb(22, 163, 74)"
    );
  });

  it("Results shows a standard message in blue before guess is submitted", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="resultMessage"]').should(
      "contain.text",
      'Spell a word using "a"',
      "have.css",
      "color",
      "rgb(37, 99, 235)"
    );
  });

  it("Results shows a cross when word is spelt incorrectly but is correct length and contains sound", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });

    cy.get('[data-cy="submitButton"]').click();

    cy.get('[data-cy="resultMessage"]').should(
      "contain.text",
      "Not a word, try again..."
    );
  });

  it("Results shows a too short when word is less than word length", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "a" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "n" });

    cy.get('[data-cy="submitButton"]').click();

    cy.get('[data-cy="resultMessage"]').should("contain.text", "Too short!");
  });

  it("Results shows where is a? when word is missing sound", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "i" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "n" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "g" });

    cy.get('[data-cy="submitButton"]').click();

    cy.get('[data-cy="resultMessage"]').should("contain.text", `Where is "a"?`);
  });

  it("Guess boxes are cleared and message clear when clear button is selected", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="sound"]').should("contain.text", "a");

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "i" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "n" });

    cy.get('[data-cy="submitButton"]').click();
    cy.get('[data-cy="resultMessage"]').should("contain.text", `Where is "a"?`);

    cy.get('[data-cy="clearButton"]').click();
    cy.get('[data-cy="guessLetter1"]').should("not.contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "i");
    cy.get('[data-cy="guessLetter3"]').should("not.contain.text", "n");
    cy.get('[data-cy="resultMessage"]').should(
      "contain.text",
      'Spell a word using "a"'
    );
  });

  it("Guess shows in guess component boxes when on screen qwerty keys are clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="qwertyt"]').click();
    cy.get('[data-cy="qwertye"]').click();
    cy.get('[data-cy="qwertys"]').click();
    cy.get('[data-cy="qwertyt"]').click();

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("contain.text", "t");
  });

  it("Guess letter is removed from component box when on screen qwerty Backspace is pressed", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="qwertyt"]').click();
    cy.get('[data-cy="qwertye"]').click();
    cy.get('[data-cy="qwerty⌫"]').click();

    cy.get('[data-cy="guessLetter1"]').should("contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "e");
  });
});
