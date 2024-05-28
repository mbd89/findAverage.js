/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/


function findAverage(array) {
  let count = 0;
  if(array.length === 0){
     return 0;
  }
 for (let i = 0; i< array.length; i++){
count += array[i]
}
return (count / array.length)
}

