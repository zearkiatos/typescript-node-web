import { printObject, genericFunction } from '../../src/generics/functions';
describe('Test suite for generics functions', () => {
    let consoleSpyOn:any;

    beforeAll(() => {
      consoleSpyOn = jest.spyOn(console, "log");
    });
    afterEach(() => {
      jest.resetAllMocks();
    });
    test('Should print the argument by console log', () => {
        const argument = {};

        printObject(argument);

        expect(consoleSpyOn).toHaveBeenCalled();
        expect(consoleSpyOn).toHaveBeenCalledWith(argument);
    });

    test('Should get the argument', () => {
        const argument = 'Hello World!';

        const arg: any = genericFunction(argument);

        expect(argument).toBe(arg);
    });
});