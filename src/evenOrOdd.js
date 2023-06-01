"use strict";

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  let answer;
  if (number % 2 != 0) {
    return (answer = "Odd");
  }
  return (answer = "Even");
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(0));
