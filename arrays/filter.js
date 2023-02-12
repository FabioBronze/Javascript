const numbers = [2, 3, 5, 7, 2, 3, 5, 7];

const remove = numbers.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);

console.log(remove);
