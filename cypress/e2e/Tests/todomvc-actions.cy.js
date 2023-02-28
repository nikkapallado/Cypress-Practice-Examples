/// <reference types="cypress" />

import { TodoPage } from "../../page-objects/todo-page"

describe(`Test TodoMVC App Actions`, () => {
    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo(`Clean room`)
    })

    it(`should add a new todo to the list`, () =>{
        todoPage.validateTodoText(0, `Clean room`)
        todoPage.validateCheckbox(0, `not.be.checked`)
    })

    it(`should mark a todo as completed`, () =>{
        todoPage.clickToggle(0)
        todoPage.validateCheckbox(0, `be.checked`) 
    })

    it(`should clear completed todos`, () =>{
        todoPage.clickToggle(0)
        todoPage.clickClear()
        todoPage.validateClear() 
    })
})