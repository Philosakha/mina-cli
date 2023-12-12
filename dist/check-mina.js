import chalk from "chalk";
// @ts-ignore
import inquirer from "inquirer";
export default async function checkMina() {
    const url = "https://api.minaexplorer.com/summary";
    const questions = [
        {
            name: "data",
            message: "What data do you want to check?",
            type: "list",
            choices: [
                "blockchain length",
                "circulating supply",
                "state hash",
                "chain id",
                "total currency",
            ],
        },
    ];
    const answers = await inquirer.prompt(questions);
    const { data } = answers;
    const response = await fetch(url);
    const mina = (await response.json());
    switch (data) {
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
