/// <reference types="cypress" />

// describe("Inspect Automation Test Store items using chain of commands", () => {
//     it("Click on the first item using item header", () => {
//         cy.visit("https://www.automationteststore.com/");
//         cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
//     });
//     it("Click on the first item using item text", () => {
//         cy.visit("https://www.automationteststore.com/");
//         cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
//             console.log("Selected the followong item: " + itemHeaderText.text())
//         })
//     });

//     it("Click on the first item using index", () => {
//         cy.visit("https://www.automationteststore.com/");
//         cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
//     });

//     it("Click on Contact Us", () => {
//         cy.visit("https://www.automationteststore.com/");
//         cy.get('.info_links_footer > li:nth-of-type(5) > a').click().then(function(bottonText){
//             console.log("Botton text: " + bottonText.text())
//         })
//     });

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");
        const makeupLink = cy.get(".subnav > ul > li:nth-of-type(3) > a").contains("Makeup")
        const skincareLink = cy.get(".subnav > ul > li:nth-of-type(4) > a").contains("Skincare")
        makeupLink.click();
        skincareLink.click();

    });
    
})