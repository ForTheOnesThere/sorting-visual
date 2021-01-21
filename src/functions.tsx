export const populateArray = (length: number): Array<number> => {
  let output = []
  for (let x = 0; x<length; x++){
    output[x] = 10
  }
  return output
}

export const randomiseArray = (input: Array<number>): Array<number> => {
  let x = 0
  while (x < input.length){
    input[x] = Math.round(input[x]*Math.random())
    x++
  }
  console.log(input)
  return input
}