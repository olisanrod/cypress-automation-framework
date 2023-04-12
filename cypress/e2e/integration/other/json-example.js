/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObjects = [{"key": "Hola"},{"key2": "Que tal?"}, {"key3": "Hasta luego!"}]

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                }, 
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2) //Jones

        cy.log(exampleArrayOfValues[0]) //Sophie
        cy.log(exampleArrayOfValues[1]) //Rose

        cy.log(users.Students[0].lastName) //Blogs2

        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[1].key2)
        cy.log(exampleArrayOfObjects[2].key3)
    });
})