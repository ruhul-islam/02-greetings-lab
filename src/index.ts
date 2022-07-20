const promptly = require("promptly");

import "./Greeter";
import "./JavaScriptGreeter";
import "./LoudGreeter";
import "./HtmlGreeter";
import "./ChalkGreeter";

import { Greeter } from "./Greeter";
import { ChalkGreeter } from "./ChalkGreeter";
import chalk from "chalk";

(async () => {
  const name = await promptly.prompt("Name: ");
  const color = await promptly.prompt("Color: ");
  //   const greetPromptly: Greeter = new Greeter("Salaam");
  //   console.log(greetPromptly.greet(name));
  const greetWithChalk: ChalkGreeter = new ChalkGreeter("Hello", color);
  console.log(chalk.keyword(color)(greetWithChalk.greet(name)));
})();
