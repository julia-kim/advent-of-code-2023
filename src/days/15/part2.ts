import { readInputFromFile } from '../../utils/io';
import { sum } from '../../utils/array';

export function part2(input?: string[]) {
  const initializationSequence = input ?? readInputFromFile(__dirname);
  const steps = initializationSequence[0].split(',')
  var hashmap = new Map<number, string[]>()
  steps.forEach(step => {
    let operation: string
    let label: string
    let focalLength: number = 0
    if (step.endsWith('-')) { operation = '-'; label = step.substring(0, step.length - 1) }
    else { operation = '='; label = step.substring(0, step.length - 2); focalLength = +step.slice(-1) }
    let currentValue = 0;
    [...label].forEach(c => {
      currentValue = (currentValue + c.charCodeAt(0)) * 17 % 256
    })
    const boxNumber: number = currentValue
    var box = hashmap.get(boxNumber) ? hashmap.get(boxNumber) : []
    if (operation == '-') {
      const index = box!!.findIndex((v => v.startsWith(label)))
      if (index != undefined && index > -1) {
        box!!.splice(index, 1)
        hashmap.set(boxNumber, box!!)
      }
    }
    if (operation == '=') {
      if (box != undefined) {
        const i = box!!.findIndex((v => v.startsWith(label)))
        if (i != -1) {
          box[i] = `${label} ${focalLength}`
        } else {
          box.push(`${label} ${focalLength}`)
        }
        hashmap.set(boxNumber, box)
      } else hashmap.set(boxNumber, [`${label} ${focalLength}`])
    }
  })
  var totalFocusingPower = 0
  for (const [key, value] of hashmap.entries()) {
    if (value.length > 0) {
      totalFocusingPower += sum(value.map((v, i) => {
        return (key + 1) * (i + 1) * +v.slice(-1)
      }))
    }
  }
  return totalFocusingPower
}
