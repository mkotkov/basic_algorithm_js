function orbitalPeriod(arr) {
  const GM = 398600.4418; // стандартний гравітаційний параметр Землі
  const earthRadius = 6367.4447; // радіус Землі в кілометрах

  const resultArray = arr.map(element => {
    const a = earthRadius + element.avgAlt; // велика піввісь орбіти
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM); // орбітальний період

    // Округлюємо значення до найближчого цілого числа
    return {
      name: element.name,
      orbitalPeriod: Math.round(T),
    };
  });

  return resultArray;
}

// Приклад виклику функції
const arr = [
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
];

console.log(orbitalPeriod(arr));
