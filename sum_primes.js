function sumPrimes(num) {
  function isPrime(num){
    const sqrt = Math.sqrt(num);
    
    if (num <= 1) {
		  return false
	  }
	  
    for (let i = 2; i <= sqrt; i++) {
		  if (num%i == 0) {
			  return false
		}
	}
	return true
}

  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;

}
console.log(sumPrimes(10));
