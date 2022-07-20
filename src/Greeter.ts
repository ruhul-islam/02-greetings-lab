export class Greeter {
  greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}

// const salaam: Greeter = new Greeter("Salaam");
// console.log(salaam.greet("Mahi"));
