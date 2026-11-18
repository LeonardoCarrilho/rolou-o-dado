// Rolou o Dado — versão refatorada (desafio proposto no curso).
const imagens = document.querySelectorAll(".dado img");
const caixas = document.querySelectorAll(".dado");
const titulo = document.querySelector("#resultado");
const botao = document.querySelector("#rolar");
const placar = { 1: 0, 2: 0, empates: 0 };

const rolarDado = () => Math.floor(Math.random() * 6) + 1;

function mostrarResultado(d1, d2) {
  caixas.forEach((c) => c.classList.remove("vencedor"));
  if (d1 > d2) {
    placar[1]++;
    caixas[0].classList.add("vencedor");
    titulo.textContent = "🏆 Jogador 1 venceu!";
  } else if (d2 > d1) {
    placar[2]++;
    caixas[1].classList.add("vencedor");
    titulo.textContent = "Jogador 2 venceu! 🏆";
  } else {
    placar.empates++;
    titulo.textContent = "Deu empate!";
  }
  document.querySelector("#pontos-1").textContent = placar[1];
  document.querySelector("#pontos-2").textContent = placar[2];
  document.querySelector("#empates").textContent = placar.empates;
}

function jogar() {
  botao.disabled = true;
  const valores = [rolarDado(), rolarDado()];
  imagens.forEach((img, i) => {
    img.classList.add("rolando");
    setTimeout(() => {
      img.src = `img/dice${valores[i]}.svg`;
      img.alt = `Dado com ${valores[i]}`;
      img.classList.remove("rolando");
    }, 400);
  });
  setTimeout(() => {
    mostrarResultado(...valores);
    botao.disabled = false;
  }, 450);
}

botao.addEventListener("click", jogar);
jogar();
