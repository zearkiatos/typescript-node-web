import Hero from "../../src/classes/Hero";
import { default as SuperHero } from "../../src/classes/Hero";

describe("Unit test for Hero class", () => {
  test("Should create a instance of hero", () => {
    const ironMan: Hero = new Hero("Iron Man", 1, 40);

    expect(ironMan).toBeDefined();
    expect(ironMan.name).toBe("Iron Man");
  });

  test("Should create a new instance of Hero but an alias", () => {
    const ironMan: SuperHero = new SuperHero("Iron Man", 1, 40);

    expect(ironMan).toBeDefined();
    expect(ironMan.name).toBe("Iron Man");
  });
});
