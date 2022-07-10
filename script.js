"use strict";

const page = document.querySelector(".sides");
const btnContato = document.querySelector("#contato");
const modal = document.querySelector(".modalContact");

var div = document.createElement("div");
div.style.backgroundColor = "#122052";
div.style.width = "380px";
div.style.borderRadius = "10px";
div.style.height = "450px";
div.style.position = "relative";
div.style.alignItems = "center";
div.style.color = "#fff";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.innerHTML = "<h1>Contato</h1>";
div.innerHTML += "<p>Nome:</p>";
div.innerHTML += "<input type='text' placeholder='Nome'/>";
div.innerHTML += "<p>Email:</p>";
div.innerHTML += "<input type='text' placeholder='Email'/>";
div.innerHTML += "<p>Mensagem:</p>";
div.innerHTML += "<textarea placeholder='Mensagem'></textarea>";


btnContato.addEventListener("click", function (e) {
  e.preventDefault();
  page.style.display = "none";
  showModal();
});

function showModal() {
    modal.appendChild(div);
}
