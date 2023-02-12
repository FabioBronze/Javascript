// Verificar se todos os elementos do array são maiores do que 10.
const arr = [7, 9, 10, 12, 14];

const above10 = arr.every((elem) => elem > 10);
// console.log(above10);

const turma = [
  {
    id: 12,
    name: "Fábio",
    age: 20,
  },
  {
    id: 25,
    name: "João",
    age: 25,
  },
  {
    id: 12,
    name: "Pedro",
    age: 40,
  },
  {
    id: 12,
    name: "Filipe",
    age: 35,
  },
];

const above18 = turma.every((p) => p.age >= 18);
console.log(above18);
