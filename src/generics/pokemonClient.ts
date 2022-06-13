import axios from "axios";
import config from "../config";
import { Pokemon } from "../pokemon/Pokemon";

const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const response = await axios.get<Pokemon>(
    `${config.POKEAPI_BASE_URL}/pokemon/${pokemonId}`
  );

  return response.data;
};

export { getPokemon };
