const MAX_USUARIOS = 30;

let usuariosOnline = 0;

function atualizarTela() {
    document.getElementById("usuarios").innerText =
        "Usuários online: " + usuariosOnline;

    if (usuariosOnline >= MAX_USUARIOS) {
        document.getElementById("status").innerText =
            "Servidor lotado! ";
    } else {
        document.getElementById("status").innerText =
            "Servidor disponível ";
    }
}

function entrar() {
    if (usuariosOnline < MAX_USUARIOS) {
        usuariosOnline++;
        atualizarTela();
    } else {
        alert("Não é possível entrar, servidor cheio!");
    }
}

function sair() {
    if (usuariosOnline > 0) {
        usuariosOnline--;
        atualizarTela();
    }
}

window.onload = function () {
    atualizarTela();
};