const isPrime = (value) => {
  for (let i = 2; i < value; i++)
    if (value % i === 0) {
      return false;
    }
  return value > 1;
};

const numbers = [6, 8, 11, 14, 42];

const trueFalse = numbers.some(isPrime);
console.log(trueFalse);
