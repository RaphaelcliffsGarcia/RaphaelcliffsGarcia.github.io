// Declaração da variável divMessage fora da função sendMail
const divMessage = document.querySelector(".alert");

function sendMail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const assunto = document.getElementById("assunto").value;

  if (!name || !email || !message || !assunto) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return;
  }

  emailjs.init("lGXV7mbqVLBXoDusm");

  const params = {
    name: name,
    email: email,
    message: message,
    assunto: assunto,
  };

  const serviceID = "service_2n3qxjr";
  const templateID = "template_ii63jje";

  emailjs
    .send(serviceID, templateID, params)
    .then((data) => {
      const mensagem = "O seu email foi enviado"; // Substitua a mensagem aqui
      ativar(mensagem, "success");
      console.log(data);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
}

function ativar(msg, type) {
  const message = document.createElement("div");
  message.classList.add("message", type);

  // Adicione o ícone de check verde usando Font Awesome
  const icon = document.createElement("i");
  icon.classList.add("fa", "fa-check");
  message.appendChild(icon);

  // Adicione a mensagem de sucesso
  const text = document.createElement("span");
  text.innerText = msg;
  message.appendChild(text);

  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

function isValidEmail(email) {
  return email.includes("@");
}

export default sendMail;
