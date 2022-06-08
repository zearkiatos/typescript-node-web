import Pokemon from "../../src/decorators/Pokemon";
import config from "../../src/config";

describe("Suite test for Pokemon class for decorators", () => {
  let logSpyOn: any;
  let errorSpyOn: any;
  beforeAll(() => {
    logSpyOn = jest.spyOn(console, "log");
    errorSpyOn = jest.spyOn(console, "error");
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test("Should create a instance of a Pokemon class", () => {
    const charmander = new Pokemon("Charmander");

    expect(charmander).toBeDefined();
    expect(charmander).toBeInstanceOf(Pokemon);
  });

  test("Should not let edit class prototype", () => {
    const modifiedPrototype = () => {
      const pokemonCustomName = Pokemon.prototype as any;
      pokemonCustomName.customName = "Pikachu";
    };

    expect(modifiedPrototype).toThrow();
  });

  test("Should save pokemon into the data base", () => {
    const expectedMessage: string = 'Pokemon was saved with id: 4';
    const charmander = new Pokemon("Charmander");

    charmander.save(4);

    expect(logSpyOn).toHaveBeenCalled();
    expect(logSpyOn).toHaveBeenCalledWith(expectedMessage);
  });

  test("Should save pokemon return a console log error if the pokemon id is less to 1 and grant to 1000", () => {
    const expectedMessage: string = 'The Pókemon id most to be between 1 and 1000';
    const charmander = new Pokemon("Charmander");

    charmander.save(-200);

    expect(errorSpyOn).toHaveBeenCalled();
    expect(errorSpyOn).toHaveBeenCalledWith(expectedMessage);
  });
});
