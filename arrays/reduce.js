const rockets = [
  {
    country: "Russia",
    launches: 32,
  },
  {
    country: "Japão",
    launches: 14,
  },
  {
    country: "EUA",
    launches: 30,
  },
  {
    country: "China",
    launches: 28,
  },
  {
    country: "Portugal",
    launches: 1,
  },
  {
    country: "Brasil",
    launches: 2,
  },
];

const total = rockets.reduce(
  (prevVal, elemAtual) => prevVal + elemAtual.launches,
  0
);

console.log(total)
