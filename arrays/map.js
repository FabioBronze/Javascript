const numbers = [3, 6, 7, 8, 10];

const dobrar = numbers.map((elem) => {
  return elem * 2;
});
// console.log(dobrar);

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

const cel = fahrenheit.map((elem) => {
  return Math.round(((elem - 32)) * 5 / 9);
});
console.log(cel);
