#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosAction = await inquirer.prompt([
        {
            name: "addTask",
            type: "input",
            message: "What would you like to add more in your todos?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Would you like to add more in your todos",
            default: true,
        }
    ]);
    todos.push(todosAction.addTask);
    console.log(todos);
    condition = todosAction.addMore;
}
