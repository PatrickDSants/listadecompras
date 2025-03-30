import { criarElementoLista } from "./dom.js";
import { salvarLista } from "./storage.js";

export function adicionarItem(listaDeCompras, inputItem, verificarListaVazia) {
    const valorInput = inputItem.value.trim();

    if (valorInput !== "") {
        const { novoItem, checkbox, botaoRemover } = criarElementoLista(valorInput);

        // Evento para riscar o item ao marcar o checkbox
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                novoItem.querySelector("p").style.textDecoration = "line-through";
                novoItem.querySelector("p").style.opacity = "0.6";
            } else {
                novoItem.querySelector("p").style.textDecoration = "none";
                novoItem.querySelector("p").style.opacity = "1";
            }
            atualizarLocalStorage(listaDeCompras);
        });

        // Evento para remover o item
        botaoRemover.addEventListener("click", function () {
            novoItem.remove();
            verificarListaVazia();
            atualizarLocalStorage(listaDeCompras);
        });

        listaDeCompras.appendChild(novoItem);
        inputItem.value = "";
        verificarListaVazia();
        atualizarLocalStorage(listaDeCompras);
    } else {
        alert("Digite um item antes de adicionar!");
    }
}

export function atualizarLocalStorage(listaDeCompras) {
    const listaAtualizada = [...listaDeCompras.querySelectorAll("li")].map(li => ({
        texto: li.querySelector("p").textContent,
        data: li.querySelector(".texto-data").textContent,
        concluido: li.querySelector("input[type='checkbox']").checked
    }));
    salvarLista(listaAtualizada);
}


