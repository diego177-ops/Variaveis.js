let pontuacao = 0;            
let pontosPorClique = 1;      
let precoUpgrade = 10;        
function atualizarTela() {
    document.getElementById("pontuacao").innerText = "Pontuação: " + pontuacao;
    document.getElementById("pontosPorClique").innerText = "Pontos por clique: " + pontosPorClique;
    document.getElementById("precoUpgrade").innerText = "Preço do upgrade: " + precoUpgrade;
    document.getElementById("mensagem").innerText = ""; // limpa mensagem ao atualizar
}
function ganharPonto() {
    pontuacao += pontosPorClique;
    atualizarTela();
}
function comprarUpgrade() {
    if (pontuacao >= precoUpgrade) {
        pontuacao -= precoUpgrade;
        pontosPorClique++;               
        precoUpgrade = Math.floor(precoUpgrade * 1.5); 
        atualizarTela();
    } else {
        alert("Você não tem pontos suficientes para o upgrade!");
    }
}
window.onload = function() {
    atualizarTela();
};