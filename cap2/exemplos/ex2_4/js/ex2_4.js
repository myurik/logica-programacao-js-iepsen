const frm = document.querySelector("form");
const outResposta = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const precoQuilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    const valor = precoQuilo * (consumo / 1000);
    outResposta.innerText = `O valor Total à ser pago é: R$ ${valor.toFixed(2)}`;

    e.preventDefault();
})