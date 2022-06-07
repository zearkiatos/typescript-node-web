import Pokemon from "../../src/decorators/Pokemon";
import config from "../../src/config";

describe("Suite test for Pokemon class for decorators", () => {
  let logSpyOn: any;
  beforeAll(() => {
    logSpyOn = jest.spyOn(console, "log");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should create a instance of a Pokemon class", () => {
    const charmander = new Pokemon("Charmander");
    const expectedResult: any = {
      name: "Charmander",
      PUBLIC_API: config.POKEAPI_BASE_URL,
    };
    
    expect(logSpyOn).toHaveBeenCalled();
    expect(logSpyOn).toHaveBeenCalledWith(expectedResult);
    expect(charmander).toBeDefined();
    expect(charmander).toBeInstanceOf(Pokemon);
  });
});
