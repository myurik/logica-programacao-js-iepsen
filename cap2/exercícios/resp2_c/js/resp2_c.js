const frm = document.querySelector("form");
const outTituloPromo = document.querySelector("#outTituloPromo");
const outPromoTerceiroProduto = document.querySelector("#outPromoTerceiroProduto");

frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inProduto.value;
    const preco = frm.inPreco.value;
    
    
    
    e.preventDefault();
})