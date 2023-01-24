let add = document.querySelector("#but1");
let fin = document.querySelector("#but2");

add.addEventListener("click", addValores);
fin.addEventListener("click", finValores);

let num = document.querySelector("#fnum");
let lista = document.querySelector("#flista");
let res = document.querySelector("#res");
let valores = [];

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addValores() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou ja encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

function finValores() {
  if (valores == 0) {
    alert("Adicione valores antes de finalilzar!");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let media = 0;
    let soma = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      } else {
        menor = valores[pos];
      }
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `Ao todo temos ${tot} números registados <br>`;
    res.innerHTML += `O maior número adicionado foi ${maior} <br>`;
    res.innerHTML += `O menor número adicionado foi ${menor} <br>`;
    res.innerHTML += `A soma dos valores é ${soma} <br>`;
    res.innerHTML += `A média dos valores é ${media} <br>`;
  }
}
