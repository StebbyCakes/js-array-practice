// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// var str = "word"
// arr = [];
//
// function repeat(str, i) {
//   for (let j = i; j > 0; j--){
//     arr.push(str);
//   }
// }
// repeat(str, 8)
// console.log(arr);
// //
// function myFunction(str, i){
//   for let(j = 0; j < i; j++){
//     result.push(str);
//   }
//   return result;
// }


 const myFunction = function(str, i){
  return Array.from({length: i}, function(){
    return str;
  });
}



// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

// arr =['dog', 'cat', 'bird', 'rock'];
// function reverseArray(arr) {
//   const result = [];
//   for (let i = arr.length - 1; i > -1; i--){ // -1 starts off at the last index of the array
//     result.push(arr[i]);
//   } console.log(result)
// }
// reverseArray(arr)

function reverseArray(arr){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    result.unshift(arr[i]);
  }
  return result;
}


// // -----------------------------------------------
//
// // ---------------------
// // Define a function that takes an array and removes all falsy values from the array
// // ---------------------
//
// // Put your answer below -------------------------
arr = [true, false, false, false, true, false, false, true, true, false];
function trueArr(arr) {
  for (let i = 0; i < arr.length; i++){
  if (arr[i] === false) {
    arr.splice(i, 1);
    i--
  }
  console.log(i);
  }
  console.log(arr);
}
trueArr(arr)

const removeFalsyValues(arr){
  const result = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i]){ // (!!arr[i] === true)
      result.push(arr[i]);
    }
  }
  return result;
}


// // -----------------------------------------------
//
// // ---------------------
// // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// // returns { name: 'Charlie', color: 'brown', age: 10 };
// // ---------------------
//
// // Put your answer below -------------------------

// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// let newArray =[];
// function nestedArray(myArray) {
// newArray [myArray[0][0]] = `${myArray[0][1]}`,
// newArray [myArray[1][0]] = `${myArray[1][1]}`,
// newArray [myArray[2][0]] = `${myArray[2][1]}`,
// console.log(newArray);
// }
// nestedArray(myArray);



function createObj1(arr) {
  const result = {};

  for (let i = 0; i < arr.length; i++){
    // result[arr[i][0]] = [arr[i][1]]; // most simple answer
    let nestedArray = arr[i];
    let key = nestedArray[0];
    let value = nestedArray[1];
    result[key] = value;
  // result.student
  // result['student'] // both of these do the same thing
  }
  return result;
}






// // -----------------------------------------------
//
// // ---------------------
// // Define a function that takes an array and removes duplicate values
// // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// // ---------------------
//
// // Put your answer below -------------------------

// arr = [1, 2, 2, 3, 3, 4, 5, 5, 6, 4, 8, 3, 2, 4]
//
// function noDupe(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var posi = arr[i];
//     var count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (posi === arr[j]) {
//         count++
//         if (count > 1) {
//           arr.splice(j, 1);
//           j--
//         }
//       }
//     }
//   }
// }
// noDupe(arr)
// console.log(arr)


// Teach's solutions
function removeDuplicates(arr) {
  return [...new Set(arr)];
} // best solution

function removeDuplicates(arr) {
  const obj  = {};
  for(let i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i];
  }
  return Array.from(Object.values(obj));
} // another solution



// // -----------------------------------------------
//
// // ---------------------
// // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// // [1,2,3,4] and [1,2,3,4] should return true
// // [1,2,3,4,5] and [1,2,3,4] should return false
// // [1,2,3,4] and [1,2,3,4,4] should return false
// // [1,2,3,4] and [1,4,3,2] should return true
// // ---------------------
//
// // Put your answer below -------------------------
//
// function identical(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   } else {
//     var newArray = [];
//     for (i = 0; i < arr1.length; i++) {
//       var search = false;
//       for (j = 0; j < arr2.length; j++) {
//         console.log(arr1[i], arr2[j]);
//         if (arr1[i] === arr2[j]) {
//           search = true;
//           newArray.push(true);
//           break;
//         }
//       } console.log(search);
//       if (search === false) {
//         newArray.push(false);
//       }
//     }
//     console.log(newArray);
//     if (newArray.includes(false)) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(identical([1, 2, 3, 5, 4], [1, 2, 3, 4, 6]));






function compareArrays(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  arr1.sort(function(a, b) {
    return a - b
  });

  arr2.sort(function(a, b){
    return a - b;
  });
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}  //easiest solution



// // -----------------------------------------------
//
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //            ___  ____  _  ____  ______        //
// //           / _ )/ __ \/ |/ / / / / __/        //
// //          / _  / /_/ /    / /_/ /\ \          //
// //         /____/\____/_/|_/\____/___/          //
// //                                              //
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
//
// // ---------------------
// // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// // DO NOT USE Array.prototype.flat()
// // ---------------------
//
// // Put your answer below -------------------------
//
//
//
//
//
//
//
//
//
//
// // -----------------------------------------------
//
// // ---------------------
// // Define a function that takes an array and splits it into parts of size i
// // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// // ---------------------
//
// // Put your answer below -------------------------
//
//
//
//
//
//
//
//
//
//
// // -----------------------------------------------
