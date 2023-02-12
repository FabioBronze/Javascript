const pizzas = ["musarella", "calabresa", "portuguesa", "marguerita"];

const foundPizzas = pizzas.find((p) => p.startsWith("m"));
//console.log(foundPizzas);

const fruits = [
  { name: "maçã", quantity: 3 },
  { name: "banana", quantity: 6 },
  { name: "pêra", quantity: 1 },
];

const foundFruit = fruits.find((p) => p.name === "pêra");
console.log(foundFruit);
