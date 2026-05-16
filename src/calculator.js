#!/usr/bin/env node

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b (handles division by zero)
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b (handles division by zero)
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a % b;
}

// Exponentiation: returns base raised to the power of exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns the square root of n (handles negative numbers)
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [, , operation, a, b] = process.argv;
  const numA = parseFloat(a);
  const numB = b !== undefined ? parseFloat(b) : undefined;

  const singleArgOps = ["squareRoot"];
  const needsTwoArgs = !singleArgOps.includes(operation);

  if (!operation || isNaN(numA) || (needsTwoArgs && isNaN(numB))) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide|modulo|power> <a> <b>");
    console.log("       node calculator.js squareRoot <n>");
    process.exit(1);
  }

  const ops = { add, subtract, multiply, divide, modulo, power, squareRoot };

  if (!ops[operation]) {
    console.error(`Unknown operation: ${operation}. Use add, subtract, multiply, divide, modulo, power, or squareRoot.`);
    process.exit(1);
  }

  try {
    const result = needsTwoArgs ? ops[operation](numA, numB) : ops[operation](numA);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
