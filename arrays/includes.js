const arr = [1, 2, 3].includes(2);
// console.log(arr);

const people = [
  {
    name: "Fábio",
    age: 20,
  },
  {
    name: "Pedro",
    age: 45,
  },
  {
    name: "Filipe",
    age: 22,
  },
];

const filtrerUsers = people.filter((p) => p.name.includes("Fá"));
console.log(filtrerUsers);
