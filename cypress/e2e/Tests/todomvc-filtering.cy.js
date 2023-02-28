/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe(`Test TodoMVC App Filtering`, () =>{
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()

        todoPage.addTodo(`Clean room`)
        todoPage.addTodo(`Learn Javascript`)
        todoPage.addTodo(`Use Cypress`)

        todoPage.clickToggle(1)
    })

    it(`should filter "Active" todos`, () => {
        todoPage.clickActive()

        todoPage.validateListLength(2)
        
        todoPage.validateTodoText(0,`Clean room`)
        todoPage.validateTodoText(1,`Use Cypress`)
    })

    it(`should filter "Completed" todos`, () => {
        todoPage.clickCompleted()

        todoPage.validateListLength(1)
        todoPage.validateTodoText(0,`Learn Javascript`)
    })

    it(`should filter "All" todos`, () => {
        todoPage.clickAll()

        todoPage.validateListLength(3)
        todoPage.validateTodoText(0,`Clean room`)
        todoPage.validateTodoText(1,`Learn Javascript`)
        todoPage.validateTodoText(2,`Use Cypress`)
    })
})