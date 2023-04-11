import Homepage_PO from '../../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../../support/pageObjects/webdriver-uni/Contact_Us_PO'

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000)
  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    homepage_PO.visitHomepage();
    //Espera un número de milisegundos o a que se resuelva un recurso con alias antes de pasar al siguiente comando.
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_Button();
    //Hace una pausa, permite interactuar con el sistema en ese momento. Luego se puede dar play y continuar el test.
    //cy.pause();
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", "h1", "Thank You for your Message!");
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
     if(Cypress.isBrowser('firefox')) {

    } else {
      contact_Us_PO.contactForm_Submission(data.first_name, data.last_name," ", "How can I learn Cypress?", "body", "Error: Invalid email address")
    }
  });
});
