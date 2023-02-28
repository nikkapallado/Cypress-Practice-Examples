/// <reference types="cypress" />

describe(`Test TodoMVC App Actions`, () => {
    beforeEach(() => {
        cy.visit(`https://todomvc.com/examples/vanillajs/`)
        cy.get('.new-todo', {timeout: 6000}).click().type(`Clean room{enter}`)
    })

    it(`should add a new todo to the list`, () =>{
        cy.get('.view > label').should(`have.text`, `Clean room`)
        cy.get('.toggle').should(`not.be.checked`)
    })

    it(`should mark a todo as completed`, () =>{
        cy.get('.toggle').click()
        cy.get('.view > label').should(`have.css`, `text-decoration-line`, `line-through`)
        cy.get('.toggle').should(`be.checked`)  
    })

    it(`should clear completed todos`, () =>{
        cy.get('.toggle').click() 
        cy.contains(`Clear`).click()
        cy.get(`.todo-list`).should(`not.have.descendants`,`li`)  
    })
})