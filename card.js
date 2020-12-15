#!/usr/bin/env node
"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require("fs");
const request = require("request");
const path = require("path");
const ora = require("ora");
const cliSpinners = require("cli-spinners");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:ghoshrajdeep2000@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },

      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.green("             Rajdeep Ghosh"),
  handle: chalk.white("@Rajdeep-G"),
  work: `${chalk.white("Sophomore at ")} ${chalk
    .hex("#2b82b2")
    .bold("IIEST, Shibpur")}`,

  github: chalk.gray("https://github.com/") + chalk.green("Rajdeep-2k"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") + chalk.blue("rajdeep-ghosh2000rg/"),

  npx: chalk.red("npx") + " " + chalk.white("Rajdeep"),

  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,

    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,

    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
  ].join("\n"),
  {
    margin: 2,
    float: "center",
    padding: 2,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
