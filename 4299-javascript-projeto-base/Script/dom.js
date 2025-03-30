// js/dom.js
export function criarElementoLista(valorInput) {
    const novoItem = document.createElement("li");

    const divContainer = document.createElement("div");
    divContainer.classList.add("lista-item-container");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoItem = document.createElement("p");
    textoItem.textContent = valorInput;

    const botaoRemover = document.createElement("button");
    botaoRemover.className = "button-remove";
    botaoRemover.textContent = "X";

    const dataHora = document.createElement("p");
    dataHora.classList.add("texto-data");
    const dataAtual = new Date();
    dataHora.textContent = dataAtual.toLocaleString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    divContainer.appendChild(checkbox);
    divContainer.appendChild(textoItem);
    divContainer.appendChild(botaoRemover);
    novoItem.appendChild(divContainer);
    novoItem.appendChild(dataHora);

    return { novoItem, checkbox, botaoRemover };
}
