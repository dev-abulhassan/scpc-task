function sumPositiveNumbers(arr) {
  let sumPositive = 0;
  for (let num of arr) {
    if (num > 0) {
      sumPositive += num;
    }
  }
  return sumPositive;
}

const inputArray = [2, -5, 10, -3, 7];
const outputSum = sumPositiveNumbers(inputArray);
console.log(outputSum);

// Output: 19
