#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosAction = await inquirer.prompt([
        {
            name: "firstAction",
            type: "input",
            message: "What would you like to add more in your todos?",
        },
        {
            name: "secondAction",
            type: "confirm",
            message: "Would you like to add more in your todos",
            default: "true",
        }
    ]);
    todos.push(todosAction.firstAction);
    console.log(todos);
    condition = todosAction.secondAction;
}
