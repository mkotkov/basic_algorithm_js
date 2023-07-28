function sumFibs(num) {
  let prevNumber = 0;//предыдущее значение 
  let currNumber = 1;//текущее значение
  let result = 0; //переменная которая принимает результат вычисления
  while (currNumber <= num) { //проверяем соответствует ли второй символ переменной в аргументе функции
    if (currNumber % 2 !== 0) {//проверяем на чётность
      result += currNumber; //если не не чётное то добавляем к число к переменной результата
    }
    currNumber += prevNumber; //сложение предыдущего значения с текущим для продолжения ряда Фибоначчи
    prevNumber = currNumber - prevNumber;//обновляется, чтобы стать предыдущим числом Фибоначчи. Так как currNumber уже был обновлен на следующее число, вычитание из него предыдущего числа дает предыдущее число Фибоначчи.
  }

  return result;
}

sumFibs(4);