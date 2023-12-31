import chalk from "chalk";
import Table from "cli-table";
// @ts-ignore
import inquirer from "inquirer";
import loading from "loading-cli";

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

  const dummyAddress =
    "B62qp95jhpNec4Cex77dkbPTCQ6zNwuKBYNPrWjaK1Dt6nfCr5boobN";

  const answers = await inquirer.prompt(questions);

  const load = loading("Checking balance").start();

  // make a loader in terminal

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

  load.stop();

  let dataJSON = JSON.parse(data) as minaAccountsData;
  let balance = Number(dataJSON.account.balance.total) / 1000000000;
  let totalBalance = Number(dataJSON.account.balance.total) / 1000000000;
  let lockedBalance =
    Number(dataJSON.account.balance.lockedBalnce) / 1000000000;

  if (!lockedBalance) {
    lockedBalance = 0;
  }

  console.log(
    chalk.green(`Balance for ${answers.publicKey} is ${balance} Mina`)
  );

  let table = new Table({
    head: ["Balance", "Total", "Locked"],
    colWidths: [20, 20, 20],
  });

  table.push([
    chalk.green(`${balance} Mina`),
    chalk.green(`${totalBalance} Mina`),
    chalk.green(`${lockedBalance} Mina`),
  ]);

  console.log(table.toString());
}
