const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const button = document.querySelector("#submit-button");
const msg = document.querySelector(".msg");
const items = document.querySelector(".items");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    msg.textContent = "Por favor, preencha todos os espaços!";
    msg.classList = "error";

    setTimeout(() => {
      msg.textContent = "";
      msg.classList = "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;
  items.appendChild(li);

  nameInput.value = ""
  emailInput.value = ""
});
