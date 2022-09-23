/* 
Write a function that takes a string (a) and a number (n) as argument and return the nth character of 'a'
*/

const nthCharacter = (a, n) => {
    return a[n - 1];
}

module.exports = {
    nthCharacter
}