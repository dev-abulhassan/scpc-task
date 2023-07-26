function findSecondSmallest(arr) {
  if (!Array.isArray(arr) || arr.length < 2) {
    throw new Error("Input should be an array with at least two elements.");
  }

  const sortedArray = arr.slice().sort((a, b) => a - b);

  return sortedArray[1];
}

const numbers = [4, 7, 1, 9, 3, 5];
const secondSmallest = findSecondSmallest(numbers);
console.log("Second Smallest Number:", secondSmallest);
