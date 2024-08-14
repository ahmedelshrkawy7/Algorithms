let sum = 0;
function factorial(n) {
  if (n <= 0) {
    return sum;
  }

  sum = n * factorial(n - 1);

  n--;
}

console.log("🚀 ~ factorial(5):", factorial(5));
