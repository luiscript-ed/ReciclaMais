document.getElementById("pontosNav").textContent =
    localStorage.getItem("pontos") || 0;

document.getElementById("qrNav").textContent =
    localStorage.getItem("qrlidos") || 0;

document.getElementById("username").textContent =
    localStorage.getItem("nome") || "Indefinido";

    const buttonOutraABa = document.getElementById("buttonAba")

    buttonOutraABa.addEventListener("click", function(){
    window.location.href="https://luiscript-ed.github.io/ReciclaMais/site-map/mapa.html";
  })