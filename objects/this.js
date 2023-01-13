let pessoa = {
    nome: "Fábio",
    idade: 20,
    dizerNome: function() {
        console.log("Olá, " + this.nome);
    },
    aniversario: function() {
        this.idade += 1
    }
}

pessoa.dizerNome();

console.log(pessoa.idade)
pessoa.aniversario();
console.log(pessoa.idade)