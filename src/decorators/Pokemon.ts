import config from "../config";
function printToConsole(constructor: Function) {
  console.log(constructor);
}
@printToConsole
class Pokemon {
  public PUBLIC_API: string | undefined = config.POKEAPI_BASE_URL;
  constructor(public name: string) {}
}

export default Pokemon;
