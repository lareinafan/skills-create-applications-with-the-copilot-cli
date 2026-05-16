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

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [, , operation, a, b] = process.argv;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (!operation || isNaN(numA) || isNaN(numB)) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide> <a> <b>");
    process.exit(1);
  }

  const ops = { add, subtract, multiply, divide };

  if (!ops[operation]) {
    console.error(`Unknown operation: ${operation}. Use add, subtract, multiply, or divide.`);
    process.exit(1);
  }

  try {
    const result = ops[operation](numA, numB);
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
