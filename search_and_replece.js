function myReplace(str, before, after) {
  let index = str.indexOf(before);
  if (index >= 0) { //проверка на соответствие
    //проверка на регистр первого символа
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else if (before.charAt(0) === before.charAt(0).toLowerCase()) {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }

    let regex = new RegExp(before, 'gi'); // создание регулярного выражения
    let result = str.replace(regex, after); //заменено before на regex
    return result;
  }
  return str; // возвращение исходной строки, если before не найдено
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
