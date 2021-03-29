// There is a narrow hallway in which people can go right and left only. When two 
// people meet in the hallway, by tradition they must salute each other. 
// People move at the same speed left and right.

// Your task is to write a function that, given a string representation of 
// people moving in the hallway, will count the number of salutes that will occur.
// Note: 2 salutes occur when people meet, one to the other and vice versa.

const countSalutes = (hallway: string): number => {
  return hallway.replace(/-/g, '')
    .split('')
    .reduce((sum: number, x: string, i: number, a: string[]): number => {
      const others: number = a.slice(i).join('').replace(/>/g, '').length
      if (x === '>' && others) {
        sum += others
      }
      return sum
    }, 0) * 2
}