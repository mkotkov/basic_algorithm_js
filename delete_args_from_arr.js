function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    let target = arguments[i];
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j] === target) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
