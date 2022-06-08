import config from "../config";
import { printToConsoleConditional } from "./decorators";

@printToConsoleConditional(true)
class Pokemon {
  public PUBLIC_API: string | undefined = config.POKEAPI_BASE_URL;
  constructor(public name: string) {}
}

export default Pokemon;
