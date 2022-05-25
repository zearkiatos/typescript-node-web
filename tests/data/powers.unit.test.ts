import powers from "../../src/data/powers";
import { PowerHandler } from "../utils/implementOfPower";
describe('Test suite for powers data', () => {
    test('Should defined a data that implemented the interface Power', () => {
        expect(powers).toBeDefined();
        expect(powers).toHaveLength(2);
        expect(PowerHandler.instanceOfPower(powers[0])).toBeTruthy();
    });
});