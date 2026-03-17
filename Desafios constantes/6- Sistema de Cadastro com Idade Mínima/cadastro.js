const IDADE_MINIMA = 18;

function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const idade = Number(document.getElementById("idade").value);

    let mensagem = "";

    if (idade >= IDADE_MINIMA) {
        mensagem = `Cadastro realizado com sucesso! Bem-vindo(a), ${nome} `;
    } else {
        mensagem = `Desculpe ${nome}, idade mínima para cadastro é ${IDADE_MINIMA} anos `;
    }

    document.getElementById("mensagem").innerText = mensagem;
}