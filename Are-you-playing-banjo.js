"use strict";

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// let inputName = prompt("Are you playing banjo? Enter your name, please");

// function playingBanjoAnswer(inputName) {
//   const inputNameToLowerCase = inputName.toLowerCase();
//   if (inputNameToLowerCase[0] !== "r") {
//     return alert(`${inputName} does not plays banjo`);
//   }
//   alert(`${inputName} plays banjo`);
// };

// playingBanjoAnswer(inputName);

function playingBanjoAnswer(name) {
    const inputNameToLowerCase = name.toLowerCase();
    if (inputNameToLowerCase[0] !== "r") {
      name = name + " does not play banjo";
    }
    name = name + " plays banjo";
    return name;
  };
