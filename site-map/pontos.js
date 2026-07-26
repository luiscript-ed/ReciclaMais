let ponto = parseInt(localStorage.getItem("pontos")) || 0;
let qrLidos = localStorage.getItem('qrlidos');

const pontoFront = document.getElementById("pontosUsuario");
const medalhaUsuario = document.getElementById("medalhaUsuario");
const meta = document.getElementById("meta");

let metaValor = 0;
const qr = document.getElementById("qrLidos");

const medalha3 = document.querySelector(".medalha3");
const medalha2 = document.querySelector(".medalha2");
const medalha1 = document.querySelector(".medalha1");
const medalhaDima = document.querySelector(".medalhaDima");

let porcentagem = 0;

if (ponto <= 150) {
    medalhaUsuario.innerHTML = "Aprendiz natural";
    medalha3.classList.add("desbloqueada");
    metaValor = 150
    meta.innerHTML = "150";

} else if (ponto > 150 && ponto <= 500){
    medalhaUsuario.innerHTML = "Guardião Verde";
    meta.innerHTML = "500";
    metaValor = 500
    medalha2.classList.add("desbloqueada");

} else if (ponto > 500 && ponto <= 2000) {
    medalhaUsuario.innerHTML = "Monge da sustentabilidade";
    meta.innerHTML = "2000";
    metaValor = 2000;
    medalha1.classList.add("desbloqueada");

} else if (ponto > 2000 ) {
    medalhaUsuario.innerHTML = "Mestre RECICLA+";
    meta.innerHTML = "ACABOU AS METAS 😲 🎉";
    medalhaDima.classList.add("desbloqueada");

}

qr.innerHTML = qrLidos;
pontoFront.innerHTML = ponto;

//Aqui fica a parte da progressão

const divisaoSpan = document.getElementById("divisao");
const porcSpan = document.getElementById("porcentagem");

console.log(divisaoSpan);
console.log(porcSpan);
console.log(meta);
console.log(barra);

let porcen = (ponto/metaValor)*100;
divisaoSpan.innerHTML = `${ponto} / ${metaValor}`;
porcSpan.innerHTML = `${porcen.toFixed(1)}%`;

const barra = document.querySelector(".barraInterna");

barra.style.width = `${porcen}%`;

// Criando fisicamente a div do card antes de usar
    const card = document.createElement("div");
     card.className = "historico";

     const ultima = JSON.parse(localStorage.getItem("ultimaAtividade"));

if (ultima) {

    card.innerHTML = `
        <h3>Última atividade</h3>

        <ul>
            <li>
                📍 ${ultima.local}<br>
                ⭐ +${ultima.pontos} pontos<br>
                📅 ${ultima.data}
            </li>
        </ul>
    `;

}
            containerHistorico.appendChild(card);