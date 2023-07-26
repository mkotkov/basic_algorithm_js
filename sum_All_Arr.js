function sumAll(arr) {

  arr.sort((a, b) => a - b);
  
  let sum = 0;
  let first = arr[0];
  let end = arr[arr.length-1];
  
  for (let i = first; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([10, 5]));
