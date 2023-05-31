"use strict";

const findShortestWord = function (string) {
  const wordsArray = string.split(" ");
  let shortestWord = wordsArray[0];
  for (let word of wordsArray) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
};

console.log(
  "Самое короткое слово: ",
  findShortestWord("The quick brown fox and i jumped over the lazy dog")
); // 'i'

console.log("Самое короткое слово: ", findShortestWord("Google do a roll")); // 'a'

console.log(
  "Самое короткое слово: ",
  findShortestWord("May the force be with you")
); // 'be'
