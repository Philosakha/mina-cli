#!/usr/bin/env node

import chalk from "chalk";
// @ts-ignore
// const figlet = require('figlet');
import figlet from "figlet";
import createFrontend from "./creating-frontend";
import checkBalance from "./check-balance";

const availableOptions: string[] = [
  "create-frontend",
  "check-balance",
  "check-transactions",
  "check-tokens",
];

// second argument should be the selected option
const option: string = process.argv[2];

if (!availableOptions.includes(option)) {
  console.log(
    chalk.red(
      `Invalid operation. Available operations are: ${availableOptions}`
    )
  );
  process.exit(-1);
}

console.log(
  chalk.magentaBright(figlet.textSync(`Mina`, { horizontalLayout: "full" }))
);

switch (option) {
  case "create-frontend":
    console.log(chalk.green("Creating frontend..."));
    createFrontend();
    break;
  case "check-balance":
    console.log(chalk.green("Checking balance..."));
    checkBalance();
    break;
  case "check-transactions":
    console.log(chalk.green("Checking transactions..."));
    break;
  case "check-tokens":
    console.log(chalk.green("Checking tokens..."));
    break;
}
