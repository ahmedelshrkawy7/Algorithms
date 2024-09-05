function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "not prime";
    }
  }

  return "prime";
}

console.log(isPrime(7));
