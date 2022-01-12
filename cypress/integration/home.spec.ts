/// <reference types="cypress"/>
import { FAVORITES_BEER_KEY } from "../../constants";
import { Beer } from "../../types";

context("Home Page", () => {
  beforeEach(function () {
    cy.visit(Cypress.env("homePath"));
    cy.fixture("initialBeers").then((initialBeers) => {
      this.initialBeers = initialBeers;
    });
  });

  it("should render the home page and display filters", () => {
    cy.get("p").contains("Filters");
  });

  it("should navigate to the about page", () => {
    cy.get(`a[href*="${Cypress.env("homePath")}"]`)
      .contains("About")
      .click();
    cy.url().should("eq", Cypress.env("aboutUrl"));
    cy.get("h5").contains("What is BrewDogBeers?");
  });

  it(
    "should render 10 initial beer cards",
    { scrollBehavior: false },
    function () {
      cy.get(".MuiCardContent-root > .MuiTypography-h5").each((item, index) => {
        cy.wrap(item).contains(this.initialBeers[index].name);
      });
    }
  );

  it("should redirect to beer page", function () {
    cy.intercept(
      {
        method: "GET",
        url: `${Cypress.env("punkApiUrl")}/*`,
      },
      []
    ).as("getMoreBeers");

    this.initialBeers.forEach((beer: Beer) => {
      cy.get(`[alt="${beer.name}"]`).click();
      cy.url().should("include", `/beers/${beer.id}`);
      cy.get("p.MuiTypography-body1").contains(beer.name);
      cy.visit(Cypress.env("homePath"));
    });
  });

  it("should load 10 more beer cards", () => {
    cy.intercept({
      method: "GET",
      url: `${Cypress.env("punkApiUrl")}/*`,
    }).as("getMoreBeers");
    cy.scrollTo("bottom");
    cy.wait("@getMoreBeers");
    cy.get(".MuiCardContent-root > .MuiTypography-h5").should(
      "have.length",
      20
    );
  });

  it("should add beer to favorites", () => {
    cy.get(
      ':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > .MuiIconButton-root > [data-testid="FavoriteIcon"]'
    ).click();
    cy.get(
      ':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > .MuiIconButton-root > [data-testid="FavoriteIcon"]'
    )
      .click()
      .should(() => {
        expect(localStorage.getItem(FAVORITES_BEER_KEY)).to.equal("[1,2]");
      });
    cy.visit(Cypress.env("homePath")).should(() => {
      expect(localStorage.getItem(FAVORITES_BEER_KEY)).to.equal("[1,2]");
    });
  });

  it("should remove beer from favorites", () => {
    cy.get(
      ':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > .MuiIconButton-root > [data-testid="FavoriteIcon"]'
    )
      .click()
      .should(() => {
        expect(localStorage.getItem(FAVORITES_BEER_KEY)).to.equal("[1]");
      });
    cy.visit(Cypress.env("homePath"));
    cy.get(
      ':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > .MuiIconButton-root > [data-testid="FavoriteIcon"]'
    )
      .click()
      .should(() => {
        expect(localStorage.getItem(FAVORITES_BEER_KEY)).to.equal("[]");
      });
  });

  it("should render filters correctly", () => {
    cy.get(".MuiAccordionSummary-content").click();
    cy.get('input[placeholder="Search by name"]');
    cy.get(".MuiBox-root").contains("IBU: 0 - 100");
    cy.get(".MuiSlider-root").should("have.length", 2);
    cy.get(".MuiBox-root").contains("ABV: 0 - 100");
    cy.get("button").contains("Apply filters");
  });

  it("should apply name filter correctly", () => {
    const searchParam = "Blonde";

    cy.intercept({
      method: "GET",
      url: `${Cypress.env("punkApiUrl")}/*`,
    }).as("getMoreBeers");
    cy.get(".MuiAccordionSummary-content").click();
    cy.get('input[placeholder="Search by name"]').clear().type(searchParam);
    cy.get("button").contains("Apply filters").click();
    cy.wait("@getMoreBeers");
    cy.get(".MuiCardContent-root > .MuiTypography-h5").each((item) => {
      cy.wrap(item).contains(searchParam);
    });
  });

  it("should apply ibu filter correctly", { scrollBehavior: false }, () => {
    const maxIbu = 50;

    cy.intercept({
      method: "GET",
      url: `${Cypress.env("punkApiUrl")}/*`,
    }).as("getMoreBeers");
    cy.get(".MuiAccordionSummary-content").click();
    cy.get("#ibu-range").click({ force: true });
    cy.get("button").contains("Apply filters").click();
    cy.wait("@getMoreBeers");
    cy.get(".MuiChip-label")
      .contains("IBU: ")
      .each((item) => {
        cy.wrap(item)
          .invoke("text")
          .then((text) => {
            const strIbu = text.replaceAll("IBU: ", "");
            expect(parseInt(strIbu, 10)).to.lessThan(maxIbu);
          });
      });
  });

  it("should apply abv filter correctly", { scrollBehavior: false }, () => {
    const maxAbv = 50;

    cy.intercept({
      method: "GET",
      url: `${Cypress.env("punkApiUrl")}/*`,
    }).as("getMoreBeers");
    cy.get(".MuiAccordionSummary-content").click();
    cy.get("#abv-range").click({ force: true });
    cy.get("button").contains("Apply filters").click();
    cy.wait("@getMoreBeers");
    cy.get(".MuiChip-label")
      .contains("ABV: ")
      .each((item) => {
        cy.wrap(item)
          .invoke("text")
          .then((text) => {
            const strIbu = text.replaceAll("ABV: ", "");
            expect(parseInt(strIbu, 10)).to.lessThan(maxAbv);
          });
      });
  });
});

export {};
