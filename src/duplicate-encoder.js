"use strict";

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once
// in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character
// is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result,
// not the input!

// Вариант 1

// function duplicateEncode(word) {
//   //create a var to hold string value that IGNORES case
//   const wordForCheck = word.toLowerCase();
//   //create a var to hold the finished string to return after it's looped through
//   let result = "";
//   //loop through all letters in string
//   for (var i = 0; i < wordForCheck.length; i += 1) {
//     //check for any characters that repeat
//     if (
//       wordForCheck.lastIndexOf(wordForCheck[i]) ===
//       wordForCheck.indexOf(wordForCheck[i])
//     ) {
//       //for each character that never dupes, place (
//       result += "(";
//     }
//     //for each character that dupes, place (
//     if (
//       wordForCheck.lastIndexOf(wordForCheck[i]) !==
//       wordForCheck.indexOf(wordForCheck[i])
//     ) {
//             result += ")";
//     }
//   }
//   //return the full string value where '(' are non duped and all')' are duped
//   return result;
// }

// Вариант 2

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map((char, i, word) => {
        return word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')'
      })
      .join('');
  }

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
