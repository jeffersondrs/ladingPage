"use strict";

const page = document.querySelector(".sides");
const btnContato = document.querySelector("#contato");
const modal = document.querySelector(".modalContact");

var div = document.createElement("div");
div.style.backgroundColor = "#122052";
div.style.width = "380px";
div.style.borderRadius = "10px";
div.style.height = "120px";
div.style.position = "relative";
div.style.alignItems = "center";
div.style.color = "#fff";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.justifyContent = "center";
div.innerHTML = '<div><button>&circlearrowleft;</button><br><a href="https://github.com/jeffersondrs"><img src="./assets/github.png" alt="" style="background-color: transparent; width: 105px; height: 53px; border-radius: 10px; margin: 25px; padding: 2px;"></a><a href="https://www.linkedin.com/in/jeffersondrs/"><img src="./assets/linkedin.png" alt="" style="width: 155px; height: 53px; border-radius: 10px; margin: 25px; padding: 2px;"></a></div>';



btnContato.addEventListener("click", function (e) {
  e.preventDefault();
  page.style.display = "none";
  showModal();
});

function showModal() {
    modal.appendChild(div);
}
