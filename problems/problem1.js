/* 
Given an array of words, write a function that returns the longest word
*/

const longestWord = (arr) => {              //alt export syntax instead of 3 lines at the bottom --- exports.longestWord = (arr) => {
    let longest = arr[0]

    for (let word of arr){
        if (word.length > longest.length){            //if (arr.length == 0) --- return "Array is empty"
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord(["i", "dan", "developer", "dog"]));

module.exports = {
    longestWord,
};