const {argumentValue} = require("../problems/problem4")

describe("argumentValue", () => {
    test("should return string", () => {
        expect(argumentValue("Hello, world!")).toBe("string");
    });
});