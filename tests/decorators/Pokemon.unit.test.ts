import Pokemon from "../../src/decorators/Pokemon";
import config from "../../src/config";

describe("Suite test for Pokemon class for decorators", () => {
  test("Should create a instance of a Pokemon class", () => {
    const charmander = new Pokemon("Charmander");

    expect(charmander).toBeDefined();
    expect(charmander).toBeInstanceOf(Pokemon);
  });

  test("Should not let edit class prototype", () => {
    const modifiedPrototype = () => {
        const pokemonCustomName = (Pokemon.prototype as any);
        pokemonCustomName.customName = 'Pikachu';
    }
    
    expect(modifiedPrototype).toThrow();
  });
});
