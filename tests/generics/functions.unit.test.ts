import { printObject, genericFunction, genericArrowFunction } from "../../src/generics/functions";
describe("Test suite for generics functions", () => {
  let consoleSpyOn: any;

  beforeAll(() => {
    consoleSpyOn = jest.spyOn(console, "log");
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test("Should print the argument by console log", () => {
    const argument = {};

    printObject(argument);

    expect(consoleSpyOn).toHaveBeenCalled();
    expect(consoleSpyOn).toHaveBeenCalledWith(argument);
  });

  test("Should get the argument", () => {
    const argument = "Hello World!";
    const expectedResult:string = 'HELLO WORLD!'

    const arg: string = genericFunction<string>(argument).toUpperCase();

    expect(expectedResult).toBe(arg);
  });

  test("Should receive a decimal a return the decimal with 2 precition", () => {
    const argument: number = 3.1416;
    const dataExpected: number = 3.14;

    let result: number = parseFloat(genericFunction<number>(argument).toFixed(2));

    expect(dataExpected).toBe(result);
  });

  test("Should get the day of today", () => {
    const argument: Date = new Date();
    const dataExpected: number = new Date().getDate();

    let today: number = genericArrowFunction<Date>(argument).getDate()

    expect(dataExpected).toBe(today);
  });
});
