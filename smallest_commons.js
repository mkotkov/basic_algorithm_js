function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findLCM(arr) {
  // Сортуємо масив у порядку зростання
  arr.sort((a, b) => a - b);

  let lcm = arr[0];
  // Знаходимо НСК для всіх елементів масиву
  for (let i = 1; i < arr.length; i++) {
    let gcd = findGCD(lcm, arr[i]);
    lcm = (lcm * arr[i]) / gcd;
  }
  return lcm;
}

function smallestCommons(arr) {
  // Генеруємо масив зі всіма числами у діапазоні між arr[0] та arr[1]
  let range = [];
  for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    range.push(i);
  }
  // Знаходимо найменше спільне кратне для масиву чисел у діапазоні
  return findLCM(range);
}

// Приклад виклику функції
console.log(smallestCommons([1, 3])); // Виведе: 6
