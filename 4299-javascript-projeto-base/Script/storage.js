export function salvarLista(lista) {
    const itensTexto = lista.map(item => ({
        texto: item.texto,
        data: item.data,
        concluido: item.concluido
    }));

    localStorage.setItem("listaDeCompras", JSON.stringify(itensTexto));
}

export function carregarLista() {
    const itensSalvos = localStorage.getItem("listaDeCompras");
    return itensSalvos ? JSON.parse(itensSalvos) : [];
}
