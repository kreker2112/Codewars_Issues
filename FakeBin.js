"use strict";

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  if (x === "") {
    return alert("Input is empty");
  }
  const arrayFromInput = Array.from(x);
  let newArray = [];
  for (let i = 0; i < arrayFromInput.length; i += 1) {
    const baseDigit = arrayFromInput[i];
    let newDigit;
    baseDigit < 5 ? (newDigit = "0") : (newDigit = "1");
    console.log(newDigit);
    newArray += newDigit;
  }
  return newArray;
}

console.log(fakeBin("45385593107843568"));
