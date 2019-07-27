// https://projecteuler.net/problem=1

function solution1(divisors, max) {
  return new Array(max).fill().map((_, i) => ({
    i,
    divisible: divisors.some(divisor => i % divisor === 0)
  })).reduce((sum, {i, divisible}) => {
    if(divisible) {
      sum += i
    }
    return sum
  }, 0)
}

module.exports = [
  solution1
]