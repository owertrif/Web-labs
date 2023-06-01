function checkNumber(argument) {
  if (typeof argument === 'number' && !isNaN(argument)) {
    if (argument % 2 === 0) {
      return "Число є парним";
    } else {
      return "Число є непарним";
    }
  } else {
    return "";
  }
}

console.log(checkNumber(4)); 
console.log(checkNumber(7)); 
console.log(checkNumber("abc")); 

function sumOfPrimes() {
  let primes = [];
  let sum = 0;
  let num = 3;

  while (primes.length < 5) {
    if (isPrime(num)) {
      primes.push(num);
      sum += num;
    }
    num++;
  }

  return sum;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(sumOfPrimes());

function sumOfSeries(n) {
  let result = 0;
  let currentTerm = 1;
  for (let i = 0; i < n; i++) {
    result += currentTerm;
    currentTerm = currentTerm * 10 + 1;
  }
  return result;
}

console.log(sumOfSeries(7));