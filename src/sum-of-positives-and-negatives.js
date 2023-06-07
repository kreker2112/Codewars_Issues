"use strict";

function countPositivesSumNegatives(input) {
  let sumOfPositive = 0;
  let sumOfNegative = 0;
  if (input === null || input.length === 0) {
    return [];
  }
  input.forEach((num) => (num > 0 ? sumOfPositive++ : (sumOfNegative += num)));

  return [sumOfPositive, sumOfNegative];
}
