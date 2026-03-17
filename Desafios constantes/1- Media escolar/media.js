const MEDIA_MINIMA = 7;

function calcular() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    let mensagem = ""

    if (media >= MEDIA_MINIMA) {
        mensagem = "Aprovado"

    } else {
        mensagem = "Reprovado"
    }

     document.getElementById("resultado").innerText =
            "Média: " + media.toFixed(2) + " -- " + mensagem
}