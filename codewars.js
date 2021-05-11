// #1
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i > -1; i--){ // -1 starts off at the last index of the array
    result.push(arr[i]);
  } console.log(result)
}
reverseArray(arr)


// # 2
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
var number=function(array){
  var newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(i + 1 + ':' + ' ' + array[i]);
    }
  return(newArray);
}



// # 3
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}


// # 4
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
  for (i = 0; i < drone.length; i++){
    lamps = lamps.replace(lamps[i], 'o');
  }

  return lamps;
}


// # 5
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript
function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  var total = 0;
    var len = marks.length;
  for (var i = 0; i < marks.length; i++){
    total = total + marks[i];
    newTotal = Math.floor(total / len);
  }return newTotal;
}
