#! /usr/bin/env node


import inquirer from "inquirer"
const answers:{
    sentence:string
}=await inquirer.prompt(
    [
        {
            name:"sentence",
            type:"input",
            message: "Enter your sentence to count words: "
        }
    ]
)
//white space removed
const words = answers.sentence.trim().split(" ")

console.log(words);

//print the word count the sentence to the console

console.log(`your sentence word count is ${words.length}`);
