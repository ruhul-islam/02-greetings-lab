import { Greeter } from "./Greeter";

const chalk = require("chalk");

export class ChalkGreeter extends Greeter {
  color: string;
  constructor(greeting: string, color: string) {
    super(greeting);
    this.color = color;
  }
}
// const greetChalk: ChalkGreeter = new ChalkGreeter("Salaam", "purple");
// let color = greetChalk.color;
// console.log(color);
// console.log(chalk.keyword(color)(greetChalk.greet("Mahi")));
