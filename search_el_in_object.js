/*функцію, яка проглядає масив об’єктів (перший аргумент) 
і повертає масив усіх об’єктів, які мають однакові
пари імен та значень (другий аргумент). Кожна пара імен та значень вихідного об'єкта повинна бути в об’єкті з колекції, якщо він необхідний у повернутому масиві.
*/

function whatIsInAName(collection, source) {
 
  const sourceKeys = Object.keys(source);
  
  return collection.filter(obj => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
