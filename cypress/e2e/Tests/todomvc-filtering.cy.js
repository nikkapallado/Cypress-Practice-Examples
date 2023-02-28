/// <reference types="cypress" />

describe(`Test TodoMVC App Filtering`, () =>{
    beforeEach(() => {
        cy.visit(`https://todomvc.com/examples/vanillajs/`)

        cy.get('.new-todo').click().type(`Clean room{enter}`)
        cy.get('.new-todo').click().type(`Learn Javascript{enter}`)
        cy.get('.new-todo').click().type(`Use Cypress{enter}`)

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it(`should filter "Active" todos`, () => {
        cy.contains(`Active`).click()

        cy.get('.todo-list li').should(`have.length`, 2)
        cy.get('.todo-list li:nth-child(1)').should(`have.text`, `Clean room`)
        cy.get('.todo-list li:nth-child(2)').should(`have.text`, `Use Cypress`)
    })

    it(`should filter "Completed" todos`, () => {
        cy.contains(`Completed`).click()

        cy.get('.todo-list li').should(`have.length`, 1)
        cy.get('.todo-list li').should(`have.text`, `Learn Javascript`)
    })

    it(`should filter "All" todos`, () => {
        cy.contains(`All`).click()

        cy.get('.todo-list li').should(`have.length`, 3)
        cy.get('.todo-list li:nth-child(1)').should(`have.text`, `Clean room`)
        cy.get('.todo-list li:nth-child(2)').should(`have.text`, `Learn Javascript`)
        cy.get('.todo-list li:nth-child(3)').should(`have.text`, `Use Cypress`)
    })
})