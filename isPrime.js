//my brute force solution is slow when called 10000 times
var isPrime = function(n) {
	//integers < 2 and even integers other than 2 are not primes
	if (n < 2) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	//check odd integers >= 3
	for (var i = 3; i <= n; i+=2) {
	  for (var j = 2; j < n; j++) {
	  	if (n % j === 0) return false;
	  }
	}
	return true;
};

//faster solution 
var isPrime = function(n) {
	//integers < 2 and even integers other than 2 are not primes
	if (n < 2) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	//check odd integers >= 3, following code from javascripter.net
	var m=Math.sqrt(n);              
	for (var i = 3; i <= m; i+=2) {  
	  if (n % i === 0) return false;
	}
	return true;
};

for (var i = 0; i <= 1000; i++) {
	if (isPrime(i)) document.write(i + " is a prime number<br>");
}