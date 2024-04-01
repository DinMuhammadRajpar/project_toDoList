#! /usr/bin/env node
import inquirer from "inquirer";
let toDOs = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "question_1",
            type: "input",
            message: "What you want to add in your to do list?",
        },
        {
            name: "question_2",
            type: "confirm",
            message: "Do you want to add more ?",
            default: "false"
        },
    ]);
    toDOs.push(addTask.question_1);
    condition = addTask.question_2;
    console.log(toDOs);
}
