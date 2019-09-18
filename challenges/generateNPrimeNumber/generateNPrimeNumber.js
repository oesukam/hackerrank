function generateNPrimeNumbers(n) {
  const primeNumbers = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j < n; j++) {
      if (i % j === 0 && i !== j) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers[Symbol.iterator]();
}

module.exports = generateNPrimeNumbers;
