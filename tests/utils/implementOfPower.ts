import Power from "../../src/data/Power";

abstract class PowerHandler {
  static instanceOfPower(object: any): object is Power {
    return "id" in object && "description" in object;
  }
}

export { PowerHandler };