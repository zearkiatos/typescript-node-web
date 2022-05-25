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

  test("Should get the specific power of the hero", () => {
    const powerExpected:string = 'Money';
    const ironMan: SuperHero = new SuperHero("Iron Man", 1, 40);

    expect(ironMan.power).toBe(powerExpected);
  });

  test("Should get some error if the power will not found", () => {
    const ironMan: SuperHero = new SuperHero("Vision", 3, 1);
    const errorExpected: Error = new Error("Not Found");
    const executeFunction = () => {
      ironMan.power;
    };

    expect(executeFunction).toThrow();
    expect(executeFunction).toThrowError(errorExpected);
  });
});
