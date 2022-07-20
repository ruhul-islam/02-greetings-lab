import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("Islamic greeting", () => {
    const greetJS: JavaScriptGreeter = new JavaScriptGreeter("Salaam");
    expect(greetJS.greet("Ruhul")).toBe("console.log('Salaam, Ruhul!')");
  });
  test("Bangladeshi greeting", () => {
    const greetJS: JavaScriptGreeter = new JavaScriptGreeter("Ki khobor");
    expect(greetJS.greet("Ruhul")).toBe("console.log('Ki khobor, Ruhul!')");
  });
});
