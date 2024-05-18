"use strict";
function makeArray(firstArray, secondArray, maxLength){
    const twoArrays = firstArray.concat(secondArray);
    
    if(twoArrays.length > maxLength){
        let shortenedArray = [];
        for(let index = 0;index < maxLength; index++){
             shortenedArray.push(twoArrays[index]);
        }
        return shortenedArray;
    }else return twoArrays;
}