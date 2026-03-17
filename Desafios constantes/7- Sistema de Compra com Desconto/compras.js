
const PRECO_PRODUTO = 50;
const TAXA_ENTREGA = 10;
const DESCONTO = 20;
const LIMITE_DESCONTO = 200;

function calcular() {

    let nome = document.getElementById("nome").value;
    let quantidade = Number(document.getElementById("quantidade").value);

    let valorProdutos = quantidade * PRECO_PRODUTO;
    let taxa = TAXA_ENTREGA;
    let descontoAplicado = 0;

    // regra de desconto
    if (valorProdutos > LIMITE_DESCONTO) {
        descontoAplicado = DESCONTO;
    }

    let total = valorProdutos + taxa - descontoAplicado;

    document.getElementById("resultado").innerText =
        "Cliente: " + nome + "\n" +
        "Valor dos produtos: R$ " + valorProdutos.toFixed(2) + "\n" +
        "Taxa de entrega: R$ " + taxa.toFixed(2) + "\n" +
        "Desconto: R$ " + descontoAplicado.toFixed(2) + "\n" +
        "Total: R$ " + total.toFixed(2);
}