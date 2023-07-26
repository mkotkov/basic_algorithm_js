function diffArray(arr1, arr2) {
  var filteredArr1 = arr1.filter((el) => arr2.indexOf(el) === -1),
      filteredArr2 = arr2.filter((el) => arr1.indexOf(el) === -1);

  return filteredArr1.concat(filteredArr2);
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
