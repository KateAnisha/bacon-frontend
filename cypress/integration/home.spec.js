
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
            {"id":55,"description":"july 2021","amount":"1040.0","date":"2021-07-02","category":"employment","type":"income"},
            {"id":66,"description":"potato bank june 2021","amount":"140.0","date":"2021-06-21","category":"investment","type":"income"},
            {"id":77,"description":"Translink","amount":"50.0","date":"2021-07-25","category":"transportation2","type":"expense"},
            {"id":88,"description":"Netflix","amount":"12.99","date":"2021-07-25","category":"Entertainment","type":"expense"},
            {"id":99,"description":"DisneyPlus","amount":"13.0","date":"2021-07-13","category":"Entertainment","type":"expense"}]
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
    it("Should get the first category of a recent expense transaction ", () => {
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(1) > p')
    })

    it("Should get the first description of a recent expense transaction ", () => {
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(2) > p')
    })

    it("Should get the date of a recent expense transaction", () => {
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(3) > p')
    })

    it("Should get the amount of a recent expense transaction", () => {
        cy.get('.recent-expense > #transactions > :nth-child(1) > .tr > :nth-child(4) > p')
    })


    // Testing left hand menu buttons 

    it("Should be able to click expenses on the main navigation menu", () => {
        cy.get("#expenses").click()
    }) 

    it("Should be able to click income on the main navigation menu", () => {
        cy.get("#income").click()
    })

    it("Should be able to click dashboard on the main navigation menu", () => {
        cy.get("#dashboard").click()
    })
  })