import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}

// const salaam: JavaScriptGreeter = new JavaScriptGreeter("Salaam");
// console.log(salaam.greet("Mahi"));
