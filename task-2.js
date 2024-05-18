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

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));