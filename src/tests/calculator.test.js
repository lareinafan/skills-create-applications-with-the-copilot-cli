const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// Addition tests
describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-3, -7)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// Subtraction tests
describe("subtract", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller one", () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  test("subtracts a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts a number from itself", () => {
    expect(subtract(42, 42)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// Multiplication tests
describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test("multiplies by zero", () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// Division tests
describe("divide", () => {
  test("divides two positive numbers", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("divides a negative number", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("divides two negative numbers", () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides a number by one", () => {
    expect(divide(8, 1)).toBe(8);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed");
  });
});

// Modulo tests
describe("modulo", () => {
  test("returns the remainder of two positive numbers", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("returns the remainder with a larger divisor", () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test("returns the remainder with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("returns zero when dividend is zero", () => {
    expect(modulo(0, 4)).toBe(0);
  });

  // Edge case: modulo by zero
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Division by zero is not allowed");
  });
});

// Power (exponentiation) tests
describe("power", () => {
  test("raises a number to a positive exponent", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to the power of one", () => {
    expect(power(9, 1)).toBe(9);
  });

  test("raises a number to a negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("raises a negative base to an even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises a negative base to an odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("raises zero to a positive exponent", () => {
    expect(power(0, 5)).toBe(0);
  });
});

// Square root tests
describe("squareRoot", () => {
  test("returns the square root of a perfect square", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns the square root of 9", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns the square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns zero for square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns the square root of one", () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: square root of a negative number
  test("throws an error for square root of a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed");
  });

  test("throws an error for square root of negative one", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed");
  });
});
