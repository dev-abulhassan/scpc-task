function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        throw new Error("Division by zero is not allowed.");
      }
    default:
      throw new Error(
        "Invalid operator. Please use one of '+', '-', '*', or '/'."
      );
  }
}

const number1 = 10;
const operator = "+";
const number2 = 5;

const result = calculate(number1, operator, number2);

console.log(result);
// Output the result
// Output: 15 (10 + 5)
