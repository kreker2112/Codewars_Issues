'use strict';

const String = {
    str: "How can mirrors be real if our eyes aren't real",

    transformToJaydenCase(inputString) {
        const arrOfStrings = inputString.split(' ');
        let jaydenCaseArr = [];
        arrOfStrings.map(word => {
            const modifiedWord = word[0].toUpperCase() + word.slice(1);
            return jaydenCaseArr.push(modifiedWord);
        })
        return jaydenCaseArr.join(' ');
      }


}

function transformToJaydenCase(inputString) {
    const arrOfStrings = inputString.split(' ');
    let jaydenCaseArr = [];
    arrOfStrings.map(word => {
        const modifiedWord = word[0].toUpperCase() + word.slice(1);
        return jaydenCaseArr.push(modifiedWord);
    })
    return jaydenCaseArr.join(' ');
  };


  console.log(transformToJaydenCase("How can mirrors be real if our eyes aren't real"));