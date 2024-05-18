"use strict";
function filterArray(numbers, value){
    const result = [];
    for(let index = 0; index < numbers.length; index++){
        if(numbers[index] > value)result.push(numbers[index]);
    }
    return result;
}