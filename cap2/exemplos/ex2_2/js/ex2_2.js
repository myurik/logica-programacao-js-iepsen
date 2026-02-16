
// Referências aos elementos da página
const frm = document.querySelector("form");
const outTitulo = document.getElementById("outTitulo");
const outResposta = document.getElementById("outResposta");

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);

    // floor = arredonda para baixo e % para pegar o resto da divisão
    let horas = Math.floor(duracao / 60);
    let min = duracao % 60;

    // mostrar o resultado no paragrafo HTML
    outTitulo.innerText = titulo;
    outResposta.innerText = `${horas} hora(s) e ${min} minuto(s)`;

    e.preventDefault();
})







