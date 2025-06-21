function printFibonacciSeries(count) {
  let fib = [0, 1];
  for (let i = 2; i < count; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.join(" ")
}

console.log(printFibonacciSeries(20))
console.log(printFibonacciSeries(30))
