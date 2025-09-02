// array
const myArr = [0, 1, 2, 3, 4, 5];   // process 01
const newArr = new Array(0, 1, 2, 3, 4, 5); // process 02

// Arrays are converted to string during concatanation.


// array methods (built-in)

// const push_myArr = myArr.push(7);   // inserts at the end, method returns the new length of the array
// console.log(`After Push method: [${myArr}]`);
// const pop_myArr = myArr.pop();   // removes the last, method returns the poped element
// console.log(`After Pop method: [${myArr}]`);
// const unshift_myArr = myArr.unshift(-1);   // inserts at the start, method returns the new length of the array
// console.log(`After Unshift method: [${myArr}]`);
// const shift_myArr = myArr.shift();   // removes the first, method returns the shifted element
// console.log(`After Shift method: [${myArr}]`);

// const slice_myArr = myArr.slice(0, 3);   // creates a new sub-array from the original array
// console.log(`After Slice method: [${slice_myArr}]`);
// console.log(`Original Array: [${myArr}]`);   // same as before
// const splice_myArr = myArr.splice(0, 3);   // creates a new sub-array and removes it from the original array
// console.log(`After Splice method: [${splice_myArr}]`);
// console.log(`Original Array: [${myArr}]`);  // spliced array is removed


// advanced methods (built-in)

const firstArray = ["Neyshan", "Neha", "Aditya", "Ruhan"];
const secondArray = ["Joy", "Ruhi", "Tanwi", "Smriti"];

// const new_firstArray = firstArray.push(secondArray);  // inserts the entire second array as a new element into the first array
// console.log(firstArray);
// const merged_firstArray = firstArray.concat(secondArray);  // merges the arrays to form a new array
// console.log(`Using Concat method: [${merged_firstArray}]`);
// const spreaded_firstArray = [...firstArray, ...secondArray];  // spreads all the elements and creates a new array
// console.log(`Using Spread operator: [${spreaded_firstArray}]`);

// const complexArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
// console.log(complexArray);
 
// const flatArray = complexArray.flat(Infinity);  // flatens all the arrays upto a given depth
// console.log(flatArray);

console.log(Array.isArray("Neha")); // false
console.log(Array.from("Neha, Neyshan"));   // creates an array from given iterable
console.log(Array.of("Neyshan", "Neha"));   // creates an array from given elements
