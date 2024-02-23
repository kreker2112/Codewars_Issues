// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   return string.split("").reduce((acc, char) => {
//     acc[char] ? (acc[char] += 1) : (acc[char] = 1);
//     return acc;
//   }, {});
// }

const count = (string) =>
  [...string].reduce((acc, char) => {
    acc[char] ? (acc[char] += 1) : (acc[char] = 1);
    return acc;
  }, {});

console.log(count(""));
console.log(count("a"));
console.log(count("ab"));
console.log(count("aba"));
console.log(count("ABC"));
