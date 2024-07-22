Array.prototype.createArrayFrom = function (arr) {
  return this.map((_, idx) => idx + 1);
};

const arrayOne2Ten = Array.from({ length: 10 }).createArrayFrom();

// Q1. Write a function to sum all the numbers in the array.
function sum(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}
// const result = sum(arrayOne2Ten);
// console.log("result: ", result);
// .......................................

// Q2. Write a function to find the maximum number in the array.
function maxNumber(arr) {
  return Math.max(...arr);
}
// const result = maxNumber(arrayOne2Ten);
// console.log("result: ", result);
// .......................................

// Q3. Write a function to reverse the array.
function reverseArray(arr) {
  return arr.reverse();
}
const result = reverseArray(arrayOne2Ten);
console.log("result: ", result);
// .......................................
