import { calculator } from "../modules/calculator.js";

test("Test addition", () => {
    expect(calculator.add(1,1)).toBe(2);
})

test("Test subtraction", () => {
    expect(calculator.subtract(1,1)).toBe(0);
})

test("Test division", () => {
    expect(calculator.divide(4,2)).toBe(2);
})

test("Test multiplication", () => {
    expect(calculator.multiply(3,2)).toBe(6);
})