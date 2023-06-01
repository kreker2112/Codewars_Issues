"use strict";

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const xArr = makeArrayByChoosenValue(str, "x");
  const oArr = makeArrayByChoosenValue(str, "o");
  const answer = xArr.length === oArr.length;
  return console.log(`${str}`, answer);
}

function makeArrayByChoosenValue(str, choosenValue) {
  const strArr = Array.from(str.toLowerCase());
  const iterator = strArr.values();
  let newArr = [];
  for (const value of iterator) {
    if (value === choosenValue) {
      newArr.push(value);
    }
  }
  return newArr;
}

XO("ooxx");
XO("xooxx");
XO("ooxXm");
XO("zpzpzpp");
XO("zzoo");




