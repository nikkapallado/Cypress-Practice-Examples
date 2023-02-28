/// <reference types="cypress" />

export class TodoPage{
    navigate(){
        cy.visit(`https://todomvc.com/examples/vanillajs/`)
    }

    addTodo(todoText){
        cy.get('.new-todo').click().type(todoText + `{enter}`)
    }

    clickToggle(toggleIndex){
        cy.get(`.todo-list li:nth-child(${toggleIndex + 1}) .toggle`).click()
    }

    clickClear(){
        cy.contains(`Clear`).click()
    }

    clickActive(){
        cy.contains(`Active`).click()
    }

    clickCompleted(){
        cy.contains(`Completed`).click()
    }

    clickAll(){
        cy.contains(`All`).click()
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1})`).should(`have.text`, expectedText)
    }

    validateCheckbox(checkBoxIndex, expectedValue){
        cy.get(`.todo-list .toggle:nth-child(${checkBoxIndex + 1})`).should(expectedValue)
        if(expectedValue === `be.checked`){
            cy.get(`li:nth-child(${checkBoxIndex + 1}) .view label`).should(`have.css`, `text-decoration-line`, `line-through`)
        }
    }

    validateClear(){
        cy.get(`.todo-list`).should(`not.have.descendants`,`li`) 
    }

    validateListLength(expectedLength){
        cy.get('.todo-list li').should(`have.length`, expectedLength)
    }
}