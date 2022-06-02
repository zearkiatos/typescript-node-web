import * as dotenv from "dotenv";
import config from "../../src/config";

const OLD_ENV: any = process.env;
describe("Test suite for config", () => {
  afterAll(() => {
    process.env = OLD_ENV;
  });
  test("Should get environment config variable", () => {
    const expectedResult: string = "develop";

    const environment: string = config.ENVIRONMENT;

    expect(environment).toBeDefined();
    expect(environment).toBe(expectedResult);
  });

  test("Should get default environment config variable", () => {
    process.env.ENVIRONMENT = undefined;
    const config = require("../../src/config").default;
    console.log(config);
    const expectedResult: string = "develop";

    const environment: string = config.ENVIRONMENT;

    expect(environment).toBeDefined();
    expect(environment).toBe(expectedResult);
  });

  test("Should get pokeapi url config variable", () => {
    const expectedResult: string = "https://pokeapi.co/api/v2";

    const url: string = config.POKEAPI_BASE_URL;

    expect(url).toBeDefined();
    expect(url).toBe(expectedResult);
  });

  test("Should get default pokeapi url config variable", () => {
    jest.mock('dotenv');
    const config = require('dotenv');
    process.env.POKEAPI_BASE_URL = undefined;
    const configTest = require("../../src/config").default;
    const expectedResult: string = "";
    console.log(process.env);

    const url: string = configTest.POKEAPI_BASE_URL;

    expect(url).toBeDefined();
    expect(url).toBe(expectedResult);
  });
});
