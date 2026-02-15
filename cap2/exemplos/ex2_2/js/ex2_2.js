function converterDuracaoFilme (){

    // Referências aos elementos da página
    let inTitulo = document.getElementById("inTitulo");
    let inDuracao = document.getElementById("inDuracao");
    let outTitulo = document.getElementById("outTitulo");
    let outResposta = document.getElementById("outResposta");

    // Obter conteúdos dos campos de entrada
    let titulo = inTitulo.value;
    let duracao = inDuracao.value;

    // floor = arredonda para baixo e % para pegar o resto da divisão
    let horas = Math.floor(duracao / 60);
    let min = duracao % 60;

    // mostrar o resultado no paragrafo HTML
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + min + " minuto(s)";
}

// cria uma referência ao elemento btConverter (botão)
let btConverter = document.getElementById("btConverter");

// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracaoFilme);