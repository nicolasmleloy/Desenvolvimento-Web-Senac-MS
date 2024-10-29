const input = document.getElementById("input");
const add = document.getElementById("add");
const body = document.getElementsByTagName("body")[0];

add.addEventListener("click", () => {
    const lista = document.createElement("ul");
    const itemLista = document.createElement("li");
    const remove = document.createElement("button");
    remove.innerHTML = "Remover";
    lista.style.display = "flex";
    lista.style.gap = "5px";

    lista.appendChild(itemLista);
    lista.appendChild(remove);
    itemLista.innerHTML = input.value;

    remove.addEventListener("click", () => {
        itemLista.remove();
        remove.remove();
        lista.remove();
    });

    input.value = null;
});
