function fibonaci(n) {
  let fib = [1, 2];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("🚀 ~ fibonaci(5):", fibonaci(5));
