import { Greeter } from "./Greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";
  addVolume(): void {
    this.extra += "!";
  }
  greet(name: string): string {
    return `${super.greet(name)}${this.extra}`;
  }
}

// const greetLoud: LoudGreeter = new LoudGreeter("Salaam");
// greetLoud.addVolume();
// greetLoud.addVolume();
// console.log(greetLoud.greet("Ruh"));
