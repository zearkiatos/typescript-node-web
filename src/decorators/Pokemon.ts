import config from "../config";
import { printToConsoleConditional, blockPrototype, checkValidPokemonId } from "./decorators";

@blockPrototype
@printToConsoleConditional(true)
class Pokemon {
  public PUBLIC_API: string | undefined = config.POKEAPI_BASE_URL;
  constructor(public name: string) {}

  @checkValidPokemonId()
  save(id: number) {
    console.log(`Pokemon was saved with id: ${id}`);
  }
}

export default Pokemon;
