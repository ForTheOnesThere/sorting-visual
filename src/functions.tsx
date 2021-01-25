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

const swap = (i: number, j: number, array: number[]): number[] => {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
  console.log(`swapped ${array[i]} and ${array[j]}`)
  return array
}

export const quickSort = (array: number[]): number[][] => {

  //if (!array.length) {return array}

  let pivot = array[array.length-1]
  let i = -1
  let animate = []

  for (let j=0; j<array.length-1; j++){
    if (array[j] <= pivot) {
      i++
      animate.push([i, j])
      swap(i, j, array)
    }
}

  array.splice(i+1, 0, pivot)
  array.pop()
  animate.push([i+1, array.length-1])

  let left = array.slice(0,i+1)
  let right = array.slice(i+2, array.length)

  return animate
  //return quickSort(left).concat(pivot, quickSort(right))
}