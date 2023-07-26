function findTwoNumbersWithSum(arr, target) {
   const elementIndices = {};
 
   for (let i = 0; i < arr.length; i++) {
     const addition = target - arr[i];
 
     if (addition in elementIndices) {
       return [elementIndices[addition], i];
     }
 
     elementIndices[arr[i]] = i;
   }
 
   return null; 
 }
 
 const sortedArray = [1, 3, 6, 8, 11, 15];
 const targetValue = 9;
 
 const result = findTwoNumbersWithSum(sortedArray, targetValue);
 
 console.log(result); 
 // Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


 