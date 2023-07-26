function findMostFrequentElement(arr) {
  const elementCount = {};

  arr.forEach((element) => {
    if (elementCount[element]) {
      elementCount[element]++;
    } else {
      elementCount[element] = 1;
    }
  });

  let mostFrequentElement;
  let maxCount = 0;

  for (const element in elementCount) {
    if (elementCount[element] > maxCount) {
      maxCount = elementCount[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const inputArray = [38, 15, 21, 55, 38, 38, 10, 44, 50];
const result = findMostFrequentElement(inputArray);

// Output the result
console.log(result); // Output: 38
