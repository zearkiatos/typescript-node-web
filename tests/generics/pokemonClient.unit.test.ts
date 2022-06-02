import { getPokemon } from "../../src/generics/pokemonClient";
describe("Test suite for pokemonClient functions", () => {
  test("Should get a Charmander pokemon from poke api", async () => {
    const pokemonId: number = 4;
    const expectedResult: string = "charmander";

    const response = await getPokemon(pokemonId);
    const pokemonName = response.data.name;

    expect(pokemonName).toBe(expectedResult);
  });
});
