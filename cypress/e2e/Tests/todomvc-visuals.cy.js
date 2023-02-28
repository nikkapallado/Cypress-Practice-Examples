/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe(`visual validation`, () =>{
    const todoPage = new TodoPage()

    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({appName: `TodoMVC`, batchName: `TodoMVC Hey!`}))
    afterEach(()=> cy.eyesClose())

    it(`should look good`, () => {
        cy.eyesCheckWindow(`empty todo list`)

        todoPage.addTodo(`Clean room`)
        todoPage.addTodo(`Lear Javascript`)
        cy.eyesCheckWindow(`two todos`)

        todoPage.clickToggle(0)
        cy.eyesCheckWindow(`mark as completed`)
    })
})