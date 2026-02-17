const frm = document.querySelector("form");
const outTituloPromo = document.querySelector("#outTituloPromo");
const outPromoTerceiroProduto = document.querySelector("#outPromoTerceiroProduto");

frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);
    
    const desconto = preco * 0.50;
    const precoTotal = (preco * 3) - desconto;
    
    outTituloPromo.textContent = `${nomeProduto} - Promoção: Leve 3 por R$: ${precoTotal.toFixed(2)}`;
    outPromoTerceiroProduto.textContent = `O 3° Produto custa apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault();
})