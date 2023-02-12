async function getPeople() {
  const resposne = await fetch("https://randomuser.me/api/?results=10");
  return resposne.json();
}

getPeople().then((data) => {
  const getPeople = data.results;
  // console.log(getPeople.filter((p) => p.gender === "female"));
});

getPeople().then((data) => {
  const result = data.results.filter((age) => age.dob.age >= 30);
  const people = [];
  for (let p of result) {
    people.push({
      Nome: `${p.name.first} ${p.name.last}`,
      Sexo: p.gender,
      Idade: p.dob.age,
    });
  }
  console.log(people);
});
