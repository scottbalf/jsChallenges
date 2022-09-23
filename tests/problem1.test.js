const {longestWord} = require("../problems/problem1")

// test("should return the longest word in the array", () => {
//     const testLongestWord = ["i", "dan", "developer", "dog"]
//     const result = app.longestWord("developer", testLongestWord)

//     expect(result).toBe("developer");
// })





describe("longestWord", () => {

    test("should return developer", () => {
        const testArray = ["i", "dan", "developer", "dog"]
        expect(longestWord(testArray)).toBe("developer");
    })
})


// different test("should return a value with length of 5") --- add brood into testArray --- change toBe to toHaveLength(5)

// .toBe("Array is empty")