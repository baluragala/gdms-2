import { calculatePrice } from "../calc";

describe("calc", () => {
  it("should calculate price", () => {
    let calculatedPrice = calculatePrice(100, 10);
    expect(calculatedPrice).toEqual(110);
  });
});
