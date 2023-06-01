'use strict';

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    return Array.from({length: n}, (v, i) => i + 1).reverse();
  };

  console.log(reverseSeq(5));

//   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/from