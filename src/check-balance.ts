// var options = {
//   method: "GET",
//   url: "https://api.minaexplorer.com/accounts/{public_key}",
//   headers: {},
//   body: "{}",
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

import chalk from "chalk";

// @ts-ignore
import inquirer from "inquirer";

export default async function checkBalance() {
  const questions = [
    {
      type: "input",
      name: "publicKey",
      message: "Enter your public key:",
    },
  ];

  const answers = await inquirer.prompt(questions);

  console.log(chalk.green(`Checking balance for ${answers.publicKey}...`));

  var options = {
    method: "GET",
    url: `https://api.minaexplorer.com/accounts/${answers.publicKey}`,
    headers: {},
    body: "{}",
  };

  fetch(options.url);
}
