#! user/bin/env node
import inquirer from "inquirer";
console.log("Hi! Welcome to my new program Trueguide-Number-Gassing-Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    { name: "userGussedNumber",
        type: "number",
        message: "Enter your guess number: ",
    }
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulation ! you guess a correct number");
}
else {
    console.log("Sorry,you guess a wrong number");
}
