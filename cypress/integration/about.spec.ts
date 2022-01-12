/// <reference types="cypress"/>

context("About Page", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("aboutPath"));
    cy.fixture("paragraphs").then((paragraphs) => {
      this.paragraphs = paragraphs;
    });
  });

  it("should render the about page and display paragraphs and links", function () {
    cy.get("h5").contains("What is BrewDogBeers?");
    cy.get("p.MuiTypography-body1").each((item, index) => {
      cy.wrap(item).should("contain", this.paragraphs[index]);
    });
    cy.get(`a[href*="${Cypress.env("brewdogUrl")}"]`);
    cy.get(`a[href*="${Cypress.env("punkApiDocumentationUrl")}"`);
    cy.get(`a[href*="${Cypress.env("punkIpaUrl")}"]`);
  });

  it("should navigate to the home page", () => {
    cy.get(`a[href*="${Cypress.env("homePath")}"]`)
      .contains("Home")
      .click();
    cy.url().should("eq", Cypress.env("homeUrl"));
    cy.get("p").contains("Filters");
  });

  it("should navigate to the home page by clicking the logo", () => {
    cy.get(`a[href*="${Cypress.env("homePath")}"]`)
      .contains("BrewDogBeers")
      .click();
    cy.url().should("eq", Cypress.env("homeUrl"));
    cy.get("p").contains("Filters");
  });
});

export {};
