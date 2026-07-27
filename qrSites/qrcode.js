// Tenta buscar o valor Se não existir dá 0.
let pontoBanco = localStorage.getItem("pontos") || "0";
let qrBanco = localStorage.getItem("qrlidos") || "0";

let listaLocalidades = JSON.parse(localStorage.getItem("locais")) || [];

const parametros = new URLSearchParams(window.location.search);
const local = parametros.get("local");

const hoje = new Date();

const registro = listaLocalidades.find(item => item.local === local);
// Tabela de dados com pontos de cada local
const mensagemH1 = document.getElementById("mensagemH1");
const mensagemH3 = document.getElementById("mensagemH3");

const locais = {

    Limpec:{
        nome:"Limpec",
        pontos:20
    },

    Shopping:{
        nome:"Shopping Boulevard",
        pontos:35
    },

    COOPMARC:{
        nome:"Cooperativa de Materiais Recicláveis de Camaçari",
        pontos:25
    },

    EcoTI:{
        nome:"Logística Reversa dos Eletroeletrônicos",
        pontos:30
    },

    SOMA:{
        nome:"SO+MA",
        pontos:20
    },

    LAReciclagem:{
        nome:"L.A Reciclagem",
        pontos:25
    },

    EcoPEV_AR:{
        nome:"EcoPEV Arembepe",
        pontos:35
    },

    EcoPEV_PC:{
        nome:"EcoPEV Ponto Certo",
        pontos:30
    },

};

const recompensa = locais[local];

if (!recompensa) {
    mensagemH1.innerHTML = "QR Code inválido";
    mensagemH3.innerHTML = "Este QR Code não é reconhecido.";
    setTimeout(()=>{

        window.location.href="https://luiscript-ed.github.io/ReciclaMais/site-map/mapa.html";

    },3000);
}

let dataValida = false

//Começo do Fim



function verifydate(){
    if(!registro){
        dataValida = true;
        return;
    }
    const dataAntiga = new Date(registro.data);
    const diferenca = hoje - dataAntiga;
    const dias = diferenca / (1000*60*60*24);

    dataValida = dias >= 30;

}

verifydate()

if( registro && dataValida == false){
    mensagemH1.innerHTML = "Oops"
    mensagemH3.innerHTML = "Voce já resgatou esse local. O certo é só resgatar uma vez por mês!!"
    setTimeout(()=>{

        window.location.href="https://luiscript-ed.github.io/ReciclaMais/site-map/mapa.html";

    },3000);

} else {
    if (registro) {

        registro.data = hoje.toISOString().split("T")[0];

    }else{

        listaLocalidades.push({
            local: local,
            data: hoje.toISOString().split("T")[0]
        });

    }

        
        localStorage.setItem("ultimaAtividade", JSON.stringify({

        local: local,

        pontos: recompensa.pontos,

        data: hoje.toLocaleDateString()

    }));

   // Converte o texto para número e soma
    let somaPonto = parseInt(pontoBanco) + recompensa.pontos;
    let somaQr = parseInt(qrBanco) + 1;

    // Salva o resultado atualizado de volta
    localStorage.setItem("pontos", somaPonto);
    localStorage.setItem("qrlidos", somaQr);
    localStorage.setItem("locais", JSON.stringify(listaLocalidades));

    mensagemH1.innerHTML = "Parabéns";
    mensagemH3.innerHTML =
`Você acabou de ganhar ${recompensa.pontos} pontos e ficou com ${somaPonto} pontos no total!`;
    setTimeout(()=>{

        window.location.href="https://luiscript-ed.github.io/ReciclaMais/site-map/mapa.html";

    },3000);
}






