// Importando a função setupPage do arquivo onde você a definiu
import setupPage from "./modules/theme-switcher.js";
import conhecimento from "./modules/conhecimento.js";
import sendMail from "./modules/sendContato.js";
import suaveScroll from "./modules/scrollsuave.js";

// Chame a função setupPage para configurar a página

setupPage();
conhecimento();
const submitButton = document.querySelector(".contatoBtn");
submitButton.addEventListener("click", function (event) {
  // Chame a função sendMail passando o objeto de evento
  sendMail(event);
});
suaveScroll();
