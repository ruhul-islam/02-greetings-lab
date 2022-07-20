import { Greeter } from "./Greeter";

export class HtmlGreeter extends Greeter {
  tagName?: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    // if (this.tagName) {
    //   this.tagName = tagName;
    // } else {
    //   this.tagName = "h1";
    // }
    this.tagName = tagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}

// const greetHTML: HtmlGreeter = new HtmlGreeter("Salaam", "h2");
// console.log(greetHTML.greet("Ruh"));
