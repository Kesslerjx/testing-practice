import { analyzeArray } from "../modules/analyzeArray.js";

test("Test analyze array funciton", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
});