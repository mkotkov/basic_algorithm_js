/* рядок в шашличний регістр. У шашличному регістрі всі-слова-в-нижньому-регістрі-та-розділені-рискою.*/

function spinalCase(str) {
  let regExp = /\s+|_+/g; 

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

 return str.replace(regExp, "-").toLowerCase();  
}

console.log(spinalCase('thisIsSpinalTap'));
