const {sameIntegers} = require("../problems/problem3")

describe ("sameIntegers", () => {
    test("should return true because the integers are the same", () => {
        expect(sameIntegers(10, 10)).toBe(true);
    });
});