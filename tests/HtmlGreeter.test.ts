import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("Islamic greeting with a tagName", () => {
    const greetHTML: HtmlGreeter = new HtmlGreeter("Salaam", "span");
    expect(greetHTML.greet("Mahi")).toBe("<span>Salaam, Mahi!</span>");
  });
  test("Islamic greeting without a tagName", () => {
    const greetHTML: HtmlGreeter = new HtmlGreeter("Salaam");
    expect(greetHTML.greet("Mahi")).toBe("<h1>Salaam, Mahi!</h1>");
  });
});
