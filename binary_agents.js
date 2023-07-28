function binaryAgent(str) {
   // Розділити рядок на окремі бінарні числа
  const binaryArray = str.split(' ');

  // Перекласти бінарні числа в десяткове число та знайти відповідну літеру
  const translatedText = binaryArray.map(binary => {
    const decimal = parseInt(binary, 2); // Перетворити бінарне число в десяткове
    return String.fromCharCode(decimal); // Знайти ASCII-код відповідної літери
  });

  // Об'єднати всі літери в перекладений текст
  return translatedText.join('');

}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
