import Pokemon from "../../src/decorators/Pokemon";
import config from "../../src/config";

describe("Suite test for Pokemon class for decorators", () => {
  test("Should create a instance of a Pokemon class", () => {
    const charmander = new Pokemon("Charmander");
    const expectedResult: any = {
      name: "Charmander",
      PUBLIC_API: config.POKEAPI_BASE_URL,
    };
    expect(charmander).toBeDefined();
    expect(charmander).toBeInstanceOf(Pokemon);
  });
});
