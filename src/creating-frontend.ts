import chalk from "chalk";
import { exec } from "child_process";

// @ts-ignore
import inquirer, { Answers, QuestionCollection } from "inquirer";
import fs from "fs";

export default async function createFrontend() {
  const questions = [
    {
      message: chalk.blue("Which framework do you want to use?"),
      name: "framework",
      type: "list",
      choices: ["NextJS", "ReactJS"],
    },
  ];

  const results = await inquirer.prompt(questions);

  const questions2 = [
    {
      message: chalk.yellow("Enter the project name:\t"),
      name: "projectName",
      type: "input",
    },
  ];

  const results2 = await inquirer.prompt(questions2);
  console.log("Creating frontend with", results2.projectName);

  switch (results.framework) {
    case "NextJS":
      console.log(chalk.magentaBright("NextJS"));
      exec(
        `git clone https://github.com/Philosakha/Starter-kit-mina-Auro-NEXTJS-13  ${results2.projectName}`,
        (err, stdout, stderr) => {
          if (err) {
            console.log(chalk.redBright(err));
            return;
          }
          console.log(chalk.greenBright(stdout));
          console.log(chalk.blueBright(stderr));
        }
      );
      break;

    case "ReactJS":
      console.log(chalk.magentaBright("ReactJS"));
      exec(
        `git clone https://github.com/Philosakha/starter-kit-mina-auro-react ${results2.projectName} 
        && cd ${results2.projectName}
        `,
        (err, stdout, stderr) => {
          if (err) {
            console.log(chalk.redBright(err));
            return;
          }
          console.log(chalk.greenBright(stdout));
          console.log(chalk.blueBright(stderr));
        }
      );
      break;
  }
}
