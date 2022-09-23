const {add} = require("../problems/problem2")

describe("add", () => {

    test("should return 5", () => {
        expect(add(2, 3)).toBe(5);
    })
});