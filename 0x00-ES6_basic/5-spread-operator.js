export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}


// test
console.log(concatArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]));