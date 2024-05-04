var valorTxt = document.getElementById("total");
var totalCompra = 7;
var numero = 0;
var totalElement;
const inputCheck = document.querySelector("#modo-noturno");
const elemento = document.querySelector("body");
var carrinho = [];

inputCheck.addEventListener("click", () => {
    const modo = inputCheck.checked ? "dark" : "light";
    elemento.setAttribute("data-bs-theme", modo);
});

function mostrarTodos() {
    var produtos = document.querySelectorAll(".produtos");
    produtos.forEach(function (produto) {
        produto.style.display = "grid";
    });
}

function mostrarLanches() {
    var bebidas = document.querySelectorAll("#bebidas");
    var comidas = document.querySelectorAll("#lanches");
    bebidas.forEach(function (bebidas) {
        bebidas.style.display = "none";
    });
    comidas.forEach(function (comidas) {
        comidas.style.display = "grid";
    });
}

function mostrarBebidas() {
    var bebidas = document.querySelectorAll("#bebidas");
    var comidas = document.querySelectorAll("#lanches");
    comidas.forEach(function (comidas) {
        comidas.style.display = "none";
    });
    bebidas.forEach(function (bebidas) {
        bebidas.style.display = "grid";
    });
}

function produto(nomeProduto, valorProduto) {
    var produtosAdicionados = document.getElementById("produtosAdicionados");
    var mensagemProduto = document.createElement("p");
    mensagemProduto.id = "produtoCarrinho"
    mensagemProduto.textContent = "1 - " + nomeProduto;
    carrinho.push({ nome: nomeProduto, valor: valorProduto });
    produtosAdicionados.appendChild(mensagemProduto);

    numero++;
    (document.getElementById("numero-carrinho").innerHTML = numero);

    var botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("btn-remover");
    botaoRemover.onclick = function () {
        produtosAdicionados.removeChild(mensagemProduto);
        totalCompra -= valorProduto;
        valorTxt.textContent = "Valor a pagar: R$ " + totalCompra.toFixed(2);
        numero--;
        (document.getElementById("numero-carrinho").innerHTML = numero);
    };

    mensagemProduto.appendChild(botaoRemover);
    produtosAdicionados.appendChild(mensagemProduto);

    totalCompra += valorProduto;
    valorTxt.textContent = "Valor a pagar:  R$ " + totalCompra.toFixed(2);
}

function enviarPedido() {
    // Aqui você pode enviar o carrinho para o backend ou fazer o que precisar com os produtos
    var observacao = document.getElementById("observacao").value;
    var cartaoRadio = document.getElementById("flexRadioDefault2");
    var dinheiroRadio = document.getElementById("flexRadioDefault1");
    var troco = document.getElementById("troco").value;
    var opcaoPagamento;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var numeroCasa = document.getElementById("numeroCasa").value;
    var complemento = document.getElementById("complemento").value;



    if(cartaoRadio.checked){
        opcaoPagamento = "Cartão "
    } else if(dinheiroRadio.checked) {
        opcaoPagamento = "Dinheiro " + "\nTroco para: " + troco;
    }

    console.log("Carrinho:", carrinho, "\nObservação: ", observacao, "\nValor a pagar: ", totalCompra, "\nOpção Pagamento: ", opcaoPagamento);
    console.log("Bairro: ", bairro, "\nRua: ", rua, "\nNumero Casa: ", numeroCasa, "\nComplemento: ", complemento);

}

/*
function enviarPedido() {
    var produtoCarrinho = document.getElementById("produtoCarrinho").value
    var observacao = document.getElementById("observacao").value;
    console.log("Produtos Selecionados: " + produtoCarrinho + "\nObservação: " + observacao);
}
*/