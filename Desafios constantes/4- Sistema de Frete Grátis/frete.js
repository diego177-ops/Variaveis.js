const VALOR_FRETE_GRATIS = 150;
function calcularFrete() {
    let valorPedido = Number(document.getElementById("pedido").value);

    let mensagem = "";

    if (valorPedido >= VALOR_FRETE_GRATIS) {
        mensagem = "Parabéns! Você ganhou FRETE GRÁTIS ";
    } else {
        let falta = VALOR_FRETE_GRATIS - valorPedido;
        mensagem = "Faltam R$ " + falta.toFixed(2) + " para ganhar frete grátis";
    }
    document.getElementById("resultado").innerText = mensagem;
}