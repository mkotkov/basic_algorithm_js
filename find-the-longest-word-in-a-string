function findLongestWordLength(str) {
  let arr = str.match(/\w[a-z]{0,}/gi);
  let wordLen = arr[0];

  for(let i = 1 ; i < arr.length ; i++) {
    if(wordLen.length < arr[i].length)
    {
    wordLen = arr[i];
    }
  }


  return wordLen.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
