/// <reference types="cypress"/>

context("Beer by id Page", () => {
  beforeEach(function () {
    let beerId;
    cy.fixture("beer").then((beer) => {
      beerId = beer.id;
      this.beer = beer;
    });
    cy.visit(`/beers/${beerId}`);
  });

  it("should display beer name correctly", function () {
    cy.get("h6").contains("Name");
    cy.get("p.MuiTypography-body1").contains(this.beer.name);
    cy.get("span").contains(`IBU: ${this.beer.ibu}`);
    cy.get("span").contains(`ABV: ${this.beer.abv}`);
  });

  it("should display beer description correctly", function () {
    cy.get("h6").contains("Description");
    cy.get("p.MuiTypography-body1").contains(this.beer.description);
  });

  it("should display beer ingredients correctly", function () {
    cy.get("h6").contains("Ingredients");
    cy.get("p")
      .contains("Hops:")
      .siblings()
      .each((item, index) => {
        cy.wrap(item).contains(this.beer.ingredients.hops[index].name);
      });
    cy.get("p")
      .contains("Malts:")
      .siblings()
      .each((item, index) => {
        cy.wrap(item).contains(this.beer.ingredients.malt[index].name);
      });
    cy.get("p")
      .contains("Yeast:")
      .siblings()
      .contains(this.beer.ingredients.yeast);
  });

  it("should display beer brewers tips correctly", function () {
    cy.get("h6").contains("Brewers tips");
    cy.get("p.MuiTypography-body1").contains(this.beer.brewers_tips);
  });

  it("should display beer food pairing correctly", function () {
    cy.get("h6").contains("Food pairing");
    cy.get("p.MuiTypography-body1")
      .contains("- ")
      .each((item, index) => {
        cy.wrap(item).contains(`- ${this.beer.food_pairing[index]}`);
      });
  });

  it("should navigate to the about page", () => {
    cy.get(`a[href*="${Cypress.env("aboutPath")}"]`)
      .contains("About")
      .click();
    cy.url().should("eq", Cypress.env("aboutUrl"));
    cy.get("h5").contains("What is BrewDogBeers?");
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
