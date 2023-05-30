"use strict";

function sum(numbers) {
    if(typeof numbers === 'string'){
        return 'NaN';
    }
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum('[23, 42, 54]'));
