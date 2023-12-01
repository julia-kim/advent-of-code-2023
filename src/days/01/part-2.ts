import { readInputFromFile } from "../../utils/io";

export function part2(input?: string[]) {
    const numberStrings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numberMap = new Map();
    numberMap.set("1", "1");
    numberMap.set("2", "2");
    numberMap.set("3", "3");
    numberMap.set("4", "4");
    numberMap.set("5", "5");
    numberMap.set("6", "6");
    numberMap.set("7", "7");
    numberMap.set("8", "8");
    numberMap.set("9", "9");
    numberMap.set("one", "1");
    numberMap.set("two", "2");
    numberMap.set("three", "3");
    numberMap.set("four", "4");
    numberMap.set("five", "5");
    numberMap.set("six", "6");
    numberMap.set("seven", "7");
    numberMap.set("eight", "8");
    numberMap.set("nine", "9");
    const lines = input ?? readInputFromFile(__dirname);

    const calibrationValues = lines.map((line) => {
        var lowest = Number.MAX_SAFE_INTEGER;
        var highest = -1;
        var firstString = "";
        var lastString = "";
        console.log(line)
        for (var i = 0; i < numberStrings.length; i++) {
            const startingIndices = [];
            let indexOccurence = line.indexOf(numberStrings[i], 0);
            while (indexOccurence >= 0) {
                startingIndices.push(indexOccurence);
                indexOccurence = line.indexOf(numberStrings[i], indexOccurence + 1);
            }
            const firstFound = Math.min(...startingIndices)
            const lastFound = Math.max(...startingIndices)
            if (firstFound < lowest) {
                lowest = firstFound;
                firstString = numberStrings[i];
            }
            const lastIndex = lastFound + numberStrings[i].length - 1
            if (lastIndex >= highest) {
                highest = lastFound;
                lastString = numberStrings[i];
            }
            if (lastFound > highest) {
                highest = lastFound;
                lastString = numberStrings[i];
            }

        }
        return +(numberMap.get(firstString) + numberMap.get(lastString));
    });
    console.log(calibrationValues.at(972))
    return calibrationValues.reduce((partialSum, x) => partialSum + x, 0);
}