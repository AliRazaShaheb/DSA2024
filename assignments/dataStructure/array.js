// ========= BUILT IN DATA STRUCTURE =========

// 1. ARRAY
const array = [1, 2, 3];

//@access
// const item = array[2]; // here '2' is index
// console.log(item);

//@insert start
// array.unshift(0);
// console.log("array: ", array);

//@insert end
// array.push(4);
// console.log("array: ", array);

//@insert between
// array.splice(2, 0, 5);
// console.log("array: ", array);

//@delete first
// array.shift();
// const deletedItem = array.shift();
// console.log("array: ", array, deletedItem);

//@delete last
// array.pop();
// const deletedItem = array.pop();
// console.log("array: ", array, deletedItem);

//@delete between
// array.splice(1, 1);
// console.log("array: ", array);

//@loop over
//=> with for-loop (itirate over by classic approach)
// for (let i = 0; i < array.length; i++) {
//   const index = i;
//   const item = array[i];
//   console.log(index, item);
// }

// => with for-of-loop
// for (let item of array) {
//   console.log(item);
// }

//=> with for-in-loop
// for (let i in array) {
//   const key = i; // here assume i as key
//   const item = array[i];
//   console.log(key, item);
// }
