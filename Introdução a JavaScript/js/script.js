function imprimirMensagem() {
    //alert("Olá Mundo");
    var iptNome = document.querySelector("#iptNome");
    var nome = iptNome.value;

    var spn = document.querySelector("#spnMensagem");
    //spn.textContent = "Olá Mundo!";
    spn.style.backgroundColor = "white";
    spn.style.display = "block";
    spn.style.margintop = "30px";
    spn.style.border = "3px solid black";
    spn.style.padding = "10px";
    spn.style.width = "50%";
    spn.style.textAlign = "center";
    spn.style.borderRadius = "100px";
}

function backgroundRed() {
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "red";
}

function backgroundWhite() {
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "white";
}

function apagarMensagem() {
    var spn = document.querySelector("#spnMensagem");
    spn.textContent = "";
    spn.style.display = "";
    spn.style.margintop = "";
    spn.style.border = "";
    spn.style.padding = "";
    spn.style.width = "";
    spn.style.textAlign = "";
    spn.style.borderRadius = "";
}