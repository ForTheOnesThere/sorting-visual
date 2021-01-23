export const populateArray = (length: number): number[] => {
  let output = []
  for (let x = 0; x<length; x++){
    output[x] = length
  }
  return output
}

export const randomiseArray = (input: number[]): number[] => {
  let x = 0
  while (x < input.length){
    input[x] = Math.round(input[x]*Math.random())
    x++
  }
  console.log(input)
  return input
}

const swap = (i: number, j: number, array: number[]): void => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
  return
}

export const quickSort = (array: number[]): number[] => {

if (!array.length) {return array}

  let pivot = array[array.length-1]
  let i = -1

  for (let j=0; j<array.length-1; j++){
    if (array[j] <= pivot) {
      i++
      swap(i, j, array)
    }
}

  array.splice(i+1, 0, pivot)
  array.pop()

  let left = array.slice(0,i+1)
  let right = array.slice(i+2, array.length)

  return quickSort(left).concat(pivot, quickSort(right))
}