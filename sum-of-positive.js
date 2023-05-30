'use strict';

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter(el => el > 0).reduce((acc, num) => acc + num, 0);
}

positiveSum([1,2,3,4,5])
positiveSum([1,-2,3,4,5])
positiveSum([])
positiveSum([-1,-2,-3,-4,-5])
positiveSum([-1,2,3,4,-5])
