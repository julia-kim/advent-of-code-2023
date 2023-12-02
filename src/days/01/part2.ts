import { readInputFromFile } from "../../utils/io";

export function part2(input?: string[]) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const map =
        new Map()
            .set("1", "1")
            .set("2", "2")
            .set("3", "3")
            .set("4", "4")
            .set("5", "5")
            .set("6", "6")
            .set("7", "7")
            .set("8", "8")
            .set("9", "9")
            .set("one", "1")
            .set("two", "2")
            .set("three", "3")
            .set("four", "4")
            .set("five", "5")
            .set("six", "6")
            .set("seven", "7")
            .set("eight", "8")
            .set("nine", "9");
    const lines = input ?? readInputFromFile(__dirname);

    const calibrationValues = lines.map((line) => {
        var firstDigitIndex = Number.MAX_SAFE_INTEGER;
        var lastDigitIndex = -1;
        var firstDigit = "";
        var lastDigit = "";
        for (var i = 0; i < numbers.length; i++) {
            const startingIndices = [];
            let indexOccurrence = line.indexOf(numbers[i], 0);
            while (indexOccurrence >= 0) {
                startingIndices.push(indexOccurrence);
                indexOccurrence = line.indexOf(numbers[i], indexOccurrence + 1);
            }
            var startingIndex = Math.min(...startingIndices)
            if (startingIndex < firstDigitIndex) {
                firstDigitIndex = startingIndex;
                firstDigit = numbers[i];
            }

            for (var j = 0; j < startingIndices.length; j++) {
                startingIndex = startingIndices[j];
                if (map.get(lastDigit) < map.get(numbers[i]) && startingIndex > lastDigitIndex) {
                    lastDigitIndex = startingIndex;
                    lastDigit = numbers[i];
                }
                if (lastDigitIndex > 0) {
                    const endingIndex = lastDigitIndex + lastDigit.length - 1
                    if (endingIndex < line.length && endingIndex >= startingIndex) {
                        continue;
                    }
                }
                if (startingIndex > lastDigitIndex) {
                    lastDigitIndex = startingIndex;
                    lastDigit = numbers[i];
                }
            }
        }
        return +(map.get(firstDigit) + map.get(lastDigit));
    });
    return calibrationValues.reduce((partialSum, x) => partialSum + x, 0);
}