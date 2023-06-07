"use strict";

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function
// that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// Вариант 1

// function isIsogram(str) {
//   const stringToCheck = str.toLowerCase();
//   for (i = 0; i < stringToCheck.length; i += 1) {
//     if (stringToCheck.split(stringToCheck[i]).length - 1 > 1) {
//       return false;
//     }
//   }
//   return true;
// }

// Вариант 2 

function isIsogram(str){
	return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
