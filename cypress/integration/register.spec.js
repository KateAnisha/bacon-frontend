
describe("Testing register page", () => {
    before(() => {
        cy.visit("http://localhost:3000/entrance")
    })

    it("Testing register page page", () => {
        cy.visit("http://localhost:3000/entrance")
        cy.get('[href="/register"]').click()
        cy.location("pathname").should("eq", "/register")
        cy.get('form').within(() => {
            cy.get('[name="name"]').type("name")
            cy.get('[name="email"]').type("email@email.com")
            cy.get('[name="password"]').type("password")
            cy.get('[name="passwordConfirm"]').type("password")
            cy.get('#submit-btn').click()
            // cy.get('#login-link').click()
            // cy.get('#login-link').should("eq", "/login")
            })
        })
})
