
describe("Testing login page", () => {
    before(() => {
        // cy.setCookie("token", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE2MjczNTk1NDJ9.JS0ZV1bhy14jOcvuwXSqkVorQgo25bJz-PNS9XRNtZc")
        cy.visit("http://localhost:3000/entrance")
        // cy.intercept("http://localhost:5000/", {
        //     fixture: "transactions.json"
        // });
        // cy.intercept("http://localhost:5000/", {
        //     fixture: "categories.json"
        // });
        // cy.intercept("http://localhost:5000/", {
        //     fixture: "budget.json"
        // });
    })
    it("Testing login page", () => {
        // cy.visit("http://localhost:3000/entrance")
        cy.get('[href="/login"]').click()
        cy.location("pathname").should("eq", "/login")
        cy.get('.main-form').within(() => {
            cy.get('[placeholder="Email"]').type("email@email.com")
            cy.get('[placeholder="Password"]').type("password")
            cy.get('button').click()
            cy.get('#intro-link').click()
            cy.location("pathname").should("eq", "/register")
            }) 
        })

})
