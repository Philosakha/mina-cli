import chalk from "chalk";

// @ts-ignore
import inquirer from "inquirer";

interface minaAccountsData {
  account: {
    publicKey: String;
    balance: {
      total: Number;
      lockedBalnce: Number;
      blockHeight: Number;
      unknown: Number;
    };
  };
  status: {
    syncStatus: String;
    blockchainLength: Number;
  };
}

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

  let headersList = {
    Accept: "*/*",
  };

  let response = await fetch(
    "https://api.minaexplorer.com/accounts/" + answers.publicKey,
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.text();
  //   console.log(data);

  let dataJSON = JSON.parse(data) as minaAccountsData;
  let balance = Number(dataJSON.account.balance.total) / 1000000000;

  console.log(
    chalk.green(`Balance for ${answers.publicKey} is ${balance} Mina`)
  );
}
