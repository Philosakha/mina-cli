import chalk from "chalk";
import Table from "cli-table";
// @ts-ignore
import inquirer from "inquirer";
import loading from "loading-cli";

interface minaData {
  blockchainLength: number;
  circulatingSupply: number;
  stateHash: string;
  chainId: string;
  totalCurrency: number;
}

export default async function checkMina() {
  const url = "https://api.minaexplorer.com/summary";

  const questions = [
    {
      name: "data",
      message: "What data do you want to check?",
      type: "list",
      choices: [
        "everything",
        "blockchain length",
        "circulating supply",
        "state hash",
        "chain id",
        "total currency",
      ],
    },
  ];

  const answers = await inquirer.prompt(questions);

  const load = loading("Checking Mina").start();

  const { data } = answers;

  const response = await fetch(url);

  const mina = (await response.json()) as minaData;

  load.stop();

  const table = new Table({
    head: ["Metric", "Value"],
    colWidths: [30, 80],
  });

  table.push(
    ["Blockchain length", String(mina.blockchainLength)],
    ["Circulating supply", String(mina.circulatingSupply)],
    ["State hash", mina.stateHash],
    ["Chain id", mina.chainId],
    ["Total currency", String(mina.totalCurrency)]
  );

  switch (data) {
    case "everything":
      console.log(chalk.green(table.toString()));
      break;
    case "blockchain length":
      console.log(chalk.green(`Blockchain length: ${mina.blockchainLength}`));
      break;
    case "circulating supply":
      console.log(chalk.green(`Circulating supply: ${mina.circulatingSupply}`));
      break;
    case "state hash":
      console.log(chalk.green(`State hash: ${mina.stateHash}`));
      break;
    case "chain id":
      console.log(chalk.green(`Chain id: ${mina.chainId}`));
      break;
    case "total currency":
      console.log(chalk.green(`Total currency: ${mina.totalCurrency}`));
      break;
  }
}
