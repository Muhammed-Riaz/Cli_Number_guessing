#! usr/bin/evn node
const randomNumber = Math.floor(Math.random() * 10 + 1);
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "userguessedNumber",
        type: "number",
        message: "please guess a number between 1_10",
    }]);
if (answer.userguessedNumber === randomNumber) {
    console.log('congratulation! you guessed a right number');
}
else {
    console.log('you guessed a wrong number');
}
;
