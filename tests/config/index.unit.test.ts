import config from "../../src/config";

describe("Test suite for config", () => {
  test("Should get environment config variable", () => {
    const expectedResult: string = "develop";

    const environment: string | undefined = config.ENVIRONMENT;

    expect(environment).toBeDefined();
    expect(environment).toBe(expectedResult);
  });

  test("Should get pokeapi url config variable", () => {
    const expectedResult: string = "https://pokeapi.co/api/v2";

    const url: string | undefined = config.POKEAPI_BASE_URL;

    expect(url).toBeDefined();
    expect(url).toBe(expectedResult);
  });
});
