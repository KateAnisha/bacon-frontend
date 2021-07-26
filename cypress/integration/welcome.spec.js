
describe("Testing login/register page", () => {
    before(() => {
        cy.intercept("http://localhost:5000/")
    })
    it("Testing home page", () => {
        cy.visit("http://localhost:3000/entrance")
            cy.get('[href="/login"]').click()
            cy.location("pathname").should("eq", "/login")
            cy.get('[placeholder="Email"]')
            cy.get('[placeholder="Email"]')


            // cy.get('[href="/register"]').click()
            // cy.location("pathname").should("eq", "/register")
            
        })
})
