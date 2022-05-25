import powers from "../data/powers";

class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string | Error {
    const power = powers.find((power) => power.id === this.powerId);
    if (power) {
      return power.description;
    }
    throw new Error("Not Found");
  }
}

export default Hero;
