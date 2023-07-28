function addTogether() {
  const [first, second] = arguments;
  //принимаем аргументы в качестве контанты
  if (typeof(first) !== "number") {
    return undefined;
  }
  // проверяем являетс ли первый аргумент числом
  //  и второй аргумент не определён
  else if (arguments.length === 1) {
    function addSecond(second) {
      // явдяется ли новый аргумент числом
      if (typeof(second) !== "number") {
        return undefined;
      }
      // новый аргумент число
      else {
        return first + second;
      }
    }
    //возврат a *function*
    return addSecond;
  }
  //первый аргумент число второй аргумент не число
  else if (typeof(second) !== "number") {
    return undefined;
  }
  // оба оргумента числа
  else {
    return first + second;
  }
}
