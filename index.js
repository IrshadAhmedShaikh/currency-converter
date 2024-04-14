import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    RIYAL: 74.13,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RIYAL"],
        message: "select your currency",
    },
    {
        name: "to",
        type: "list",
        message: "select your currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "RIYAL"],
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amount",
    },
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
console.log(chalk.green(convertedamount));
