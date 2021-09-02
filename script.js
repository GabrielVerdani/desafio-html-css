// Elementos da página
const introduction = document.getElementById("introduction");
const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const intro3 = document.getElementById("intro3");
const introInput = document.getElementById("intro-input");
const introInputP = document.getElementById("intro-input-p");

const des1 = document.getElementById("des1");
const des2 = document.getElementById("des2");
const des3 = document.getElementById("des3");

const optionsContainer = document.getElementById("options");

// Textos usados
let text1 = "olá, seja bem vindo, usuário n2090873.";
let text2 = "esta é uma página sobre ███████.";
let text3 = "se quiser saber mais sobre ███████, digite 1.";

let text4 = "na verdade, ███████ é quem você quer que seja.";
let text5 =
  "mas este site irá dizer alguns aspectos que ███████ pode ou não ter.";
let text6 = "selecione o que você quer saber:";

let options =
  "1 - interesses<br>2 - personalidade<br>3 - habilidades<br>4 - profissional";

// Textos e elementos em lista
let texts = [text1, text2, text3, text4, text5, text6];
let places = [intro1, intro2, intro3, des1, des2, des3];

let i = 0;
let actual = 0;

function write(text, place) {
  function loop() {
    if (i < text.length) {
      if (actual > 2) {
        introduction.style.display = "none";
      }
      place.textContent += text[i];
      i++;
      setTimeout(loop, 30);
    } else if (actual != 2 && actual != 5) {
      i = 0;
      actual++;
      setTimeout(nextText, 700);
      console.log(actual);
    } else if (actual == 2) {
      i = 0;
      introInput.style.display = "inline";
      introInputP.style.display = "inline";
      introInput.focus();
    } else if (actual == 5) {
      optionsContainer.innerHTML = options;
    }
  }
  loop();
}

introInput.addEventListener("keydown", (e) => {
  if (e.key == 1) {
    introInput.value = 1;
    introInput.disabled = true;
    actual++;
    setTimeout(nextText, 200);
  }
});

function nextText() {
  write(texts[actual], places[actual]);
}

write(texts[actual], places[actual]);
