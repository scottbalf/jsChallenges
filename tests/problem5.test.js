const {nthCharacter} = require("../problems/problem5")

describe("nthCharacter", () => {
    test("should return e", () => {
        expect(nthCharacter("Yes")).toBe("e");
    });
})              // needs to be fixed