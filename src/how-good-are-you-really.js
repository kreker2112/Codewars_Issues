'use strict';

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Вариант 1

// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints);
//     const avaragePoint = classPoints.reduce((acc, el) => acc += el, 0) / classPoints.length;
//     return yourPoints < avaragePoint ? false : true;
//   }

//   Вариант 2

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

  console.log(betterThanAverage([2, 3], 5));
  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));

