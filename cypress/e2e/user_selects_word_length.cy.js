describe("User opens web app to select word length", () => {
  it("Shows 4 guess letter boxes as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Shows 3 guess letter boxes when word length 3 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click();
    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("not.exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Shows 4 guess letter boxes when word length 4 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click();
    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("not.exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Shows 5 guess letter boxes when word length 5 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength5"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("not.exist");
  });

  it("Shows 6 guess letter boxes when word length 6 is clicked", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength6"]').click();

    cy.get('[data-cy="guessLetter1"]').should("exist");
    cy.get('[data-cy="guessLetter2"]').should("exist");
    cy.get('[data-cy="guessLetter3"]').should("exist");
    cy.get('[data-cy="guessLetter4"]').should("exist");
    cy.get('[data-cy="guessLetter5"]').should("exist");
    cy.get('[data-cy="guessLetter6"]').should("exist");
  });

  it("Render word length button 4 with blue background and others with white background as default", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength4"]').should(
      "have.css",
      "background-color",
      "rgb(191, 219, 254)"
    );
    cy.get('[data-cy="wordLength3"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get('[data-cy="wordLength5"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get('[data-cy="wordLength6"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
  });

  it("Render word length button 3 with blue background when clicked and others with white background", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength3"]').click();

    cy.get('[data-cy="wordLength3"]').should(
      "have.css",
      "background-color",
      "rgb(191, 219, 254)"
    );
    cy.get('[data-cy="wordLength4"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get('[data-cy="wordLength5"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
    cy.get('[data-cy="wordLength6"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    );
  });

  it("Clears guess component boxes when word lnegth is changed", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="wordLength6"]').click();

    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "s" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "t" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "e" });
    cy.get('[data-cy="mainContainer"]').trigger("keyup", { key: "d" });

    cy.get('[data-cy="wordLength4"]').click();

    cy.get('[data-cy="guessLetter1"]').should("not.contain.text", "t");
    cy.get('[data-cy="guessLetter2"]').should("not.contain.text", "e");
    cy.get('[data-cy="guessLetter3"]').should("not.contain.text", "s");
    cy.get('[data-cy="guessLetter4"]').should("not.contain.text", "t");

    cy.get('[data-cy="wordLength6"]').click();

    cy.get('[data-cy="guessLetter5"]').should("not.contain.text", "e");
    cy.get('[data-cy="guessLetter6"]').should("not.contain.text", "d");
  });
});
