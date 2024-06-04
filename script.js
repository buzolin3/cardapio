var valorTxt = document.getElementById("total");
var totalCompra = 7;
var numero = 0;
var totalElement;
const inputCheck = document.querySelector("#modo-noturno");
const elemento = document.querySelector("body");
var carrinho = [];


//Trocar modo noturno
inputCheck.addEventListener("click", () => {
    const modo = inputCheck.checked ? "dark" : "light";
    elemento.setAttribute("data-bs-theme", modo);
});


//Mostrar todos produtos
function mostrarTodos() {
    var produtos = document.querySelectorAll(".produtos");
    produtos.forEach(function (produto) {
        produto.style.display = "grid";
    });
}


//Mostrar os Lanches na tela
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


//Mostrar as Bebidas na tela
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


//Adicionar produtos no carrinho e Aumentar numero no icon carrinho
function produto(nomeProduto , valorProduto) {
    var produtosAdicionados = document.getElementById("produtosAdicionados");
    var mensagemProduto = document.createElement("p");
    mensagemProduto.id = "produtoCarrinho"
    mensagemProduto.textContent = "1 - " + nomeProduto;
    carrinho.push("%0a" + nomeProduto);
    produtosAdicionados.appendChild(mensagemProduto);
    alert("Produto Adicionado ao Carrinho")

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


// Função enviar Pedido para Whatsapp
function enviarPedido() {
    var observacao = document.getElementById("observacao").value;
    var nome = document.getElementById("nome").value;
    var celular = document.getElementById("celular").value;
    var cartaoRadio = document.getElementById("flexRadioDefault2");
    var dinheiroRadio = document.getElementById("flexRadioDefault1");
    var troco = document.getElementById("troco").value;
    var opcaoPagamento;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var numeroCasa = document.getElementById("numeroCasa").value;
    var complemento = document.getElementById("complemento").value;
    
    //Verifica se escolheu cartão ou dinheiro e o troco
    if(cartaoRadio.checked){
        opcaoPagamento = "Cartão "
    } else if(dinheiroRadio.checked) {
        opcaoPagamento = "Dinheiro " + "%0a" + "%0a" + "Troco para: " + troco ;
    }

    //API para enviar para Whatsapp
    var link = "https://api.whatsapp.com/send/?phone=16997417362&text=" +
    "Pedido" + "%0a" + 
    "%0a" + "Nome do Cliente: " + nome + "%0a" +
    "%0a" + "Celular: " + celular + "%0a" +
    "%0a" + "Produtos Selecionados: " + carrinho + "%0a" +
    "%0a" + "Observação: " + observacao + "%0a" +
    "%0a" + "Valor a pagar: " + totalCompra +  "%0a" +
    "%0a" + "Opção Pagamento: " + opcaoPagamento + "%0a" +
    "%0a" + "Bairro: " + bairro + "%0a" +
    "%0a" + "Rua: " + rua + "%0a" +
    "%0a" + "Numero Casa: " + numeroCasa + "%0a" +
    "%0a" + "Complemento: " + complemento; "%0a" ;

    //Verificando se todos campos obrigatorios foram preenchidos
    if (nome.trim() === "" || celular.trim() === "" || bairro.trim() === "" || rua.trim() === "" || numeroCasa.trim() === "" ) {
        var txtObrigatorio = document.getElementById("txtObrigatorio").innerHTML="Por favor, preencha todos os campos obrigatórios.";
        alert("Por favor, preencha todos os campos obrigatórios.")
    } else {
        window.location.href = link;
    }
}
