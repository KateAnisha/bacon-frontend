
// Test home page 
  describe('Testing home page', () => {
    before(() => {
    cy.setCookie("token", "23423r2ffwfw3245")
    cy.intercept("http://localhost:5000/api/v1/user/transactions", {
        body: [
            {"id":11,"description":"food","amount":"4.5","date":"2021-07-06","category":"food","type":"expense"},
            { "id":22,"description":"milk","amount":"3.5","date":"2021-07-06","category":"food","type":"expense"},
            {"id":33,"description":"pizza","amount":"10.5","date":"2021-07-13","category":"food","type":"expense"},
            {"id":44,"description":"flower","amount":"20.0","date":"2021-07-21","category":"gifts","type":"expense"},
            {"id":55,"description":"july 2021","amount":"1040.0","date":"2021-07-02","category":"employment","type":"income"}]
    })

    cy.intercept("http://localhost:5000/api/v1/user/categories", {
        body: [
            {"id":1,"description":"health","type":"expense"},
            {"id":2,"description":"gifts","type":"expense"},
            {"id":3,"description":"travel","type":"expense"},
            {"id":4,"description":"employment","type":"income"},
            {"id":5,"description":"dividend","type":"income"}]
    })

    cy.intercept("http://localhost:5000/api/v1/user/budget", {
        body: {"id":6,"amount":"0.0"}
    })

    cy.visit("http://localhost:3000/entrance")
    })

    it('After logging in, recent transactions for (expenses/income) and a chart should render', () => {
        cy.get("#home").click()
        cy.get("#transactions").contains("employment")
    })

    // Testing expense section on home page
    it("Should get the first row of a recent expense transaction", () => {
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(1) > p').contains("food")
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(2) > p').contains("food")
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(3) > p').contains("2021-07-06")
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(4) > p').contains("4.5")
    })

    it("Should get the first row of a recent income transaction", () => {
        cy.get('.recent-income > #transactions > :nth-child(1) > .tr > :nth-child(1)').contains("employment")
        cy.get('.recent-income > #transactions > :nth-child(1) > .tr > :nth-child(2) > p').contains("july 2021")
        cy.get('.recent-income > #transactions > :nth-child(1) > .tr > :nth-child(3) > p').contains("2021-07-02")
        cy.get('.recent-income > #transactions > :nth-child(1) > .tr > :nth-child(4) > p').contains("$1040.0")
    })
   
    // Testing left hand menu buttons 

    it("Should be able to click expenses on the main navigation menu and test content within", () => {
        cy.get("#expenses").click()
        cy.location("pathname").should("eq", "/expenses")
        cy.get('#full-transaction > h2').contains("Expense transaction history")
        // cy.get("#income").click()
        // cy.get("#dashboard").click()
        it("Should get the first row of a recent expense transaction", () => {
            cy.get(':nth-child(1) > .tr > :nth-child(1) > p').contains("food")
            cy.get(':nth-child(1) > .tr > :nth-child(2) > p').contains("food")
            cy.get(':nth-child(1) > .tr > :nth-child(3) > p').contains("2021-07-06")
            cy.get(':nth-child(1) > .tr > :nth-child(4) > p').contains("$4.5")
            cy.get(':nth-child(1) > .tr > :nth-child(5) > #edit').click()
            cy.get(':nth-child(1) > .tr > :nth-child(5) > #delete').click()
            cy.get('#add-transaction > .transaction-form').within(() => {
                cy.get('select')
                cy.get('[type="text"]').type("Transaction desc")
                cy.get('[type="number"]').type("4.5")
                // cy.get('[type="date"]').type("2021/12/12")
                cy.get('#submit-btn').click()
    
            })
        }) 
    })

    it("Should be able to click income on the main navigation menu and test content within", () => {
        cy.get('#income').click()
        cy.location("pathname").should("eq", "/income")
        cy.get(':nth-child(1) > p').contains("employment")
        cy.get(':nth-child(2) > p').contains("july 2021")
        cy.get(':nth-child(3) > p').contains("2021-07-02")
        cy.get(':nth-child(4) > p').contains("1040.0")
        cy.get('div.transaction-form > .transaction-form').within(() => {
            cy.get('select')
            cy.get('[type="text"]').type("Transaction desc")
            cy.get('[type="number"]').type("4.5")
            // cy.get('[type="date"]').type("2021/12/12")
            cy.get('#submit-btn').click()
        })
    })

    it("Should be able to click dashboard on the main navigation menu and test content within", () => {
        cy.get('#dashboard').click()
        cy.location("pathname").should("eq", "/dashboard")
        cy.get('#SvgjsSvg1419')
        cy.get('#SvgjsSvg1474')
    })
  })