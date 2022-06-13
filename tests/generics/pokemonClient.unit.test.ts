import { getPokemon } from "../../src/generics/pokemonClient";
import { Pokemon } from "../../src/pokemon/Pokemon";
describe("Test suite for pokemonClient functions", () => {
  test("Should get a Charmander pokemon from poke api", async () => {
    const pokemonId: number = 4;
    const expectedResult: string = "charmander";
    const typeExpected: string = "fire";

    const response:Pokemon = await getPokemon(pokemonId);
    const pokemonName = response.name;
    const pokemonType = response.types[0].type.name;

    expect(pokemonName).toBe(expectedResult);
    expect(pokemonType).toBe(typeExpected);
  });
});
