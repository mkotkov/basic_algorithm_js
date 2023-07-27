function uniteUnique(arr) {
  const finalArray = [];
  for (let i = 0; i < arguments.length; i++) {
    const arrayArgs = arguments[i];
    for (let j = 0; j < arrayArgs.length; j++) {
      let indexValue = arrayArgs[j];
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
