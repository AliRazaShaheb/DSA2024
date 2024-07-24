// ========= BUILT IN DATA STRUCTURE =========

// 1. OBJECTS
const object = {
  a: 1,
  b: 2,
  c: 3,
};

//@access
// const item = object.a;
// const item = object["b"];
// console.log("item: ", item);

//@insert
// object.d = 4;
// console.log("object: ", object);

//@delete
// delete object.b;
// console.log("object: ", object);

//@loop over

//=> with for-in-loop
// for (let key in object) {
//   const value = object[key];
//   console.log("key-value: ", key, value);
// }

//=> with Object.keys return 'Array' of 'Keys' than one can itirate over like an array
// const objectKeys = Object.keys(object);

//=> with Object.values return 'Array' of 'values' than one can itirate over like an array
// const objectValues = Object.values(object);

//=> with Object.entries return 'Array' of 'key - values' than one can itirate over like an array
// const objectKeyValue = Object.entries(object);
// console.log("objectKeyValue: ", objectKeyValue);
