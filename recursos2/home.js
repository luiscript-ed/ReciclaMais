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

  const buttonMap = document.getElementById("mapaLink")

    buttonMap.addEventListener("click", function(){
    window.location.href="https://luiscript-ed.github.io/ReciclaMais/site-map/mapa.html";
  })
   const buttonForms = document.getElementById("form");

   buttonForms.addEventListener("click", function(){
    window.location.href="https://docs.google.com/forms/d/e/1FAIpQLScAx-F0cmU5muKfCcf9tGJcKMEn1fcJXL_3cjPBr0q6bbxZ-g/viewform?usp=dialog";
  })