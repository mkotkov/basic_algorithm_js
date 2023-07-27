function fearNotLetter(str) {
    // Перетворюємо рядок на масив літер
  const letters = str.split('');
  
  // Перебираємо літери в масиві
  for (let i = 0; i < letters.length - 1; i++) {
    // Індекс поточної літери у таблиці ASCII
    const currentCharCode = letters[i].charCodeAt(0);
    
    // Якщо наступна літера має більший код, ніж поточна + 1,
    // то це означає, що пропущена літера має код currentCharCode + 1
    if (letters[i + 1].charCodeAt(0) !== currentCharCode + 1) {
      return String.fromCharCode(currentCharCode + 1); // Повертаємо пропущену літеру
    }
  }

  // Якщо всі літери знайдені, повертаємо undefined
  return undefined;
}

console.log(fearNotLetter("abce"));
