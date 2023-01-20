class Person {
  // Classe
  constructor(firstName, lastName, age) {
    // Função
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    // Método
    console.log(`${this.firstName} ${this.lastName}`);
  }

  static speak() { // Método Estático
    console.log("Teste Métodos Estáticos");
  }
}

const person = new Person("Fábio", "Bronze", 20);
person.getFullName();
Person.speak()