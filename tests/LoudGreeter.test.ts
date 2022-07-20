import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("Islamic greeting without calling addVolume", () => {
    const greetLoud: LoudGreeter = new LoudGreeter("Salaam");
    expect(greetLoud.greet("Mahi")).toBe("Salaam, Mahi!!");
  });
  test("Islamic greeting with calling addVolume once", () => {
    const greetLoud: LoudGreeter = new LoudGreeter("Salaam");
    greetLoud.addVolume();
    expect(greetLoud.greet("Mahi")).toBe("Salaam, Mahi!!!");
  });
  test("Islamic greeting with calling addVolume 5 times", () => {
    const greetLoud: LoudGreeter = new LoudGreeter("Salaam");
    greetLoud.addVolume();
    greetLoud.addVolume();
    greetLoud.addVolume();
    greetLoud.addVolume();
    greetLoud.addVolume();
    expect(greetLoud.greet("Mahi")).toBe("Salaam, Mahi!!!!!!!");
  });
});
