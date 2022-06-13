import * as dotenv from "dotenv";
import Config from "./Config";

dotenv.config();

const config: Config = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  POKEAPI_BASE_URL: process.env.POKEAPI_BASE_URL,
};

export default config;
