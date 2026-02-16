// Referência dos elementos HTML
const frm = document.querySelector("form");
const outVeiculo = document.querySelector("#outVeiculo")
const outEntrada = document.querySelector("#outEntrada")
const outParcela = document.querySelector("#outParcela");


frm.addEventListener("submit", (e) => {
    let modeloVeiculo = frm.inModeloVeiculo.value;
    let preco = Number(frm.inPreco.value);

    // calcula o valor de entrada e parcelas
    let entrada = preco * 0.5;
    let parcela = entrada / 12;

    // altera o conteudo dos paragrafos
    outVeiculo.innerText = `Promoção:   ${modeloVeiculo}`;
    outEntrada.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    outParcela.innerText = `+ 12x de R$: ${parcela.toFixed(2)}`;

    e.preventDefault();
})







