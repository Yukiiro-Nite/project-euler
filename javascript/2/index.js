function solution1(max) {
  const fib = [1, 2]
  let nextFib = fib[fib.length - 2] + fib[fib.length - 1]

  while(nextFib < max) {
    fib.push(nextFib)
    nextFib = fib[fib.length - 2] + fib[fib.length - 1]
  }

  return fib
    .filter(num => num % 2 === 0 )
    .reduce((sum, num) => {
      sum += num
      return sum
    }, 0)
}

module.exports = [
  solution1
]