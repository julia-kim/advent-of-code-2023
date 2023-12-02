import { part1 } from "../days/01/part-1";
import { part2 } from "../days/01/part-2";

describe("day 01 - part 1", () => {
    it("calculates the sum of all the calibration values", () => {
        const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
        const result = part1(input);
        expect(result).toBe(142);
    });
});

describe("day 01 - part 2", () => {
    it("calculates the sum of all the REAL calibration values", () => {
        const input =
            [
                "two1nine",
                "eightwothree",
                "abcone2threexyz",
                "xtwone3four",
                "4nineeightseven2",
                "zoneight234",
                "7pqrstsixteen"
            ];
        const result = part2(input);
        expect(result).toBe(281);
    });
});