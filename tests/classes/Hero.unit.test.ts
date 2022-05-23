import Hero from "../../src/classes/Hero";

describe("Unit test for Hero class", () => {
  test("Should create a instance of hero", () => {
    const ironMan: Hero = new Hero("Iron Man", 1, 40);

    expect(ironMan).toBeDefined();
    expect(ironMan.name).toBe('Iron Man');
  });
});
