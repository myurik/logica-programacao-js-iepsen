const frm = document.querySelector("form");
const outMedicamento = document.querySelector("#outMedicamento");
const outPromocao = document.querySelector("#outPromocao");

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value;
    const preco = Number(frm.inPreco.value);

    const promocao = Math.floor(preco) * 2;

    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por apenas R$ ${promocao.toFixed(2)}`;
    e.preventDefault();    
})
