const frm = document.querySelector("form");
const outValorTotal = document.querySelector("#outValorTotal");

frm.addEventListener("submit", (e) =>{
    const valorUso = frm.inValorUso.value;
    const tempoUso = frm.inTempoUso.value;

    const valorTotal = Math.ceil(tempoUso / 15) * valorUso;

    outValorTotal.textContent = `Valor a pagar R$: ${valorTotal.toFixed(2)}`;

    e.preventDefault();
})