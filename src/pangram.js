"use strict";

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
//     const stringForCheck = string.toLowerCase();
//     const arrayForCheck = stringForCheck.split(' ');
//     console.log('arrayForCheck: ', arrayForCheck)
//     for (let i = 0; i < arrayForCheck.length; i += 1){
//       let wordForCheck = Array.from(arrayForCheck[i]).length;
//       let wordForCheckUniqueArray = new Set(arrayForCheck[i]).size;
//       console.log('wordForCheck: ', wordForCheck);
//       console.log('wordForCheckUniqueArray: ', wordForCheckUniqueArray);
//       wordForCheck === wordForCheckUniqueArray ? true : false;
//     };
//   }

function isPangram(string) {
  const stringForCheck = string.toLowerCase().replace(/[\s.,%\d]/g, "");
  const arrayForCheck = stringForCheck.split("");
  const baseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  const arrayOfUniqueCharsInString = new Set(arrayForCheck);;
  return baseArray.length == arrayOfUniqueCharsInString.size ? true : false;
}

// Вариант 2

// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
//   }

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
console.log(
  isPangram(
    "A pangram is a sentence that contains every single letter of the alphabet at least once."
  )
);
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));


