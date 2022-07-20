import { Greeter } from "../src/Greeter";

describe("greeter class", () => {
  test("Islamic greeting", () => {
    const greeter: Greeter = new Greeter("Salaam");
    expect(greeter.greet("Ruhul")).toBe("Salaam, Ruhul!");
  });
  test("Bangladeshi greeting", () => {
    const greeter: Greeter = new Greeter("Ki khobor");
    expect(greeter.greet("Mahi")).toBe("Ki khobor, Mahi!");
  });
});
