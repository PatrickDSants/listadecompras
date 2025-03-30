import { carregarLista } from "./storage.js";
import { adicionarItem } from "./events.js";
import { criarElementoLista } from "./dom.js";

const botaoAdicionar = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const inputItem = document.getElementById("input-item");

// Criando a mensagem de lista vazia
const mensagemListaVazia = document.createElement("p");
mensagemListaVazia.textContent = "Sua lista está vazia!";
mensagemListaVazia.style.textAlign = "center";
mensagemListaVazia.style.color = "#777";
mensagemListaVazia.style.fontStyle = "italic";
mensagemListaVazia.style.display = "none"; // Inicialmente oculta
listaDeCompras.parentElement.insertBefore(mensagemListaVazia, listaDeCompras);

function verificarListaVazia() {
    const itensReais = listaDeCompras.querySelectorAll("li").length;
    mensagemListaVazia.style.display = itensReais === 0 ? "block" : "none";
}

// Evento de adicionar item
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    adicionarItem(listaDeCompras, inputItem, verificarListaVazia);
});

document.addEventListener("DOMContentLoaded", () => {
    const listaSalva = carregarLista();
    listaSalva.forEach(item => adicionarItemNaLista(item.texto, item.data, item.concluido, listaDeCompras));
    verificarListaVazia(); // Verifica a lista após carregar os itens salvos
});

function adicionarItemNaLista(texto, data, concluido, listaDeCompras) {
    const { novoItem, checkbox } = criarElementoLista(texto, data);

    if (concluido) {
        checkbox.checked = true;
        novoItem.querySelector("p").style.textDecoration = "line-through";
        novoItem.querySelector("p").style.opacity = "0.6";
    }

    listaDeCompras.appendChild(novoItem);
    verificarListaVazia(); // Atualiza a verificação da lista
}

// Verifica a lista ao carregar
verificarListaVazia();
