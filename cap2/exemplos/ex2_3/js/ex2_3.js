function mostrarPromocao (){
    
    // Referência dos elementos HTML
    let inModeloVeiculo = document.getElementById("inModeloVeiculo");
    let inPreco = document.getElementById("inPreco");
    let outVeiculo = document.getElementById("outVeiculo");
    let outEntrada = document.getElementById("outEntrada");
    let outParcela = document.getElementById("outParcela");

    // obter conteúdos dos campos de entrada.
    let modeloVeiculo = inModeloVeiculo.value;
    let preco = Number(inPreco.value);

    // calcula o valor de entrada e parcelas
    let entrada = preco * 0.5;
    let parcela = entrada / 12;

    // altera o conteudo dos paragrafos
    outVeiculo.textContent = "Promoção: " + modeloVeiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);

}

// cria uma referência ao elemento btVerPromocao (botão)
let btVerPromocao = document.getElementById("btVerPromocao");

// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);