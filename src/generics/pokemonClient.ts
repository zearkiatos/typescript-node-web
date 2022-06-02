import axios from "axios";
import config from "../config";

const getPokemon = async (pokemonId: number) => {
  const response = await axios.get(
    `${config.POKEAPI_BASE_URL}/pokemon/${pokemonId}`
  );

  return response;
};

export { getPokemon };
