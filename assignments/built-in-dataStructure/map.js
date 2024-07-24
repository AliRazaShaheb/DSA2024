// ========= BUILT IN DATA STRUCTURE =========

// 1. Map
const map = new Map();

//@insert
map.set("a", 1);
map.set("b", 2);
const array = [3, 4];
const obj = {
  hello: "world",
};
map.set("c", array);
map.set("d", obj);

// @delete
// map.delete("d");
// map.delete("a");

//@access
// const result = map.has("d");
// console.log("result: ", result);

// const result = map.get("b");
// console.log("result: ", result);

//@loop over

// => with for-of-loop
// for (let item of map) {
//   console.log(item);
// }

//=> with forEach
map.forEach((each) => {
  console.log(each);
});

// reset map by clearing its value
// map.clear();
