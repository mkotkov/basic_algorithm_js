function steamrollArray(arr) {
  let result = [];

  // Рекурсивна функція для вирівнювання масиву
  function flatten(arr) {
    arr.forEach(item => {
      if (Array.isArray(item)) {
        // Якщо елемент є масивом, викликаємо функцію рекурсивно
        flatten(item);
      } else {
        // Якщо елемент не є масивом, додаємо його до результату
        result.push(item);
      }
    });
  }

  flatten(arr);
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
