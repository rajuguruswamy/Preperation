//  Create array

const arr = [1, 2, 3, "Williams"];

// insert at the end of the array
console.log("--------insert at the end of the array--------");
arr.push(4);

for (const item of arr) {
  console.log(item);
}

// insert at the beginning of the array
console.log("--------insert at the beginning of the array--------");
arr.unshift(0);
for (const item of arr) {
  console.log(item);
}

// remove an item at the end of the array
console.log("--------remove an item at the end of the array--------");
arr.pop();
for (const item of arr) {
  console.log(item);
}

// remove an item at the beging of the array
console.log("--------remove an item at the beging of the array--------");
arr.shift();

for (const item of arr) {
  console.log(item);
}

// map, filter,  reduce, concat , slice and splice

//  map method
console.log("************* Map Method *************");

const array1 = [1, 2, 9, 15];
const map1 = array1.map((x) => x * 2);
console.log(map1);

//  Filter method
console.log("************* Filter Method *************");
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);
console.log(result);

// reduce method
console.log("************* reduce Method *************");
const array2 = [1, 2, 3, 4];
const initialvalue = 10;
const result2 = array2.reduce((prev, current) => prev + current, initialvalue);
console.log(result2);

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let countedNames = names.reduce(function (allNames, name) {
  // console.log(allNames);
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

console.log(" ******************* slice method ******************* ");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(" ******************* splice method ******************* ");
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// Array - Big-O time complexity

// insert and remove from end - o(1)
// insert and remove from from beginning - o(n)
// acces 0(1)
//  search 0(n)
//  push/pop 0(1)
// shift / unshift / concat /slice/splice - o(n)
// forEach / map/ reduce - o(n)
