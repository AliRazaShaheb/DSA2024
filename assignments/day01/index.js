// Q1. Create an array of numbers from 1 to 10.
const arrayOne2Ten = Array.from({ length: 10 }, (_, idx) => idx + 1);

// const result = arrayOne2Ten;
// console.log("result: ", result);
// .......................................

// Q2. Write a function to sum all the numbers in the array.
function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
// const result = sum(arrayOne2Ten);
// console.log("result: ", result);
// .......................................

// Q3. Write a function to find the maximum number in the array.
function maxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// const result = maxNumber(arrayOne2Ten);
// console.log("result: ", result);
// .......................................

// Q4. Write a function to reverse the array.
function reverseArray(arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
// const result = reverseArray(arrayOne2Ten);
// console.log("result: ", result);
// .......................................
