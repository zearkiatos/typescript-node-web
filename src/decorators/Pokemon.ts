import config from "../config";
import {
  printToConsoleConditional,
  blockPrototype,
  checkValidPokemonId,
  readOnly,
} from "./decorators";

@blockPrototype
@printToConsoleConditional(true)
class Pokemon {
  @readOnly()
  public PUBLIC_API: string | undefined = config.POKEAPI_BASE_URL;
  constructor(public name: string) {}

  @checkValidPokemonId()
  save(id: number) {
    console.log(`Pokemon was saved with id: ${id}`);
  }
}

export default Pokemon;
