import {
  printToConsole,
  printToConsoleConditional,
} from "../../src/decorators/decorators";

describe("Suite unit test for decorators", () => {
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
  test("Should call print a console with the defined constructor", () => {
    const constructor: Function = () => {};

    printToConsole(constructor);

    expect(logSpyOn).toHaveBeenCalled();
  });

  test("Should call print a console from a factory decorate with first param is thruty", () => {
    printToConsoleConditional(true)();

    expect(logSpyOn).toHaveBeenCalled();
  });

  test("Should not call print a console from a factory decorate with first param is falsy", () => {
    printToConsoleConditional(false)();

    expect(logSpyOn).not.toHaveBeenCalled();
  });
});
