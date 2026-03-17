const VELOCIDADE_INICIAL = 10;

let velocidadeAtual = VELOCIDADE_INICIAL;

function mostrarVelocidade() {
    document.getElementById("velocidade").innerText =
        "Velocidade atual: " + velocidadeAtual;
}

function acelerar() {
    velocidadeAtual += 2;
    mostrarVelocidade();
}

function desacelerar() {
    velocidadeAtual -= 2;
    mostrarVelocidade();
}

window.onload = function () {
    mostrarVelocidade();
};