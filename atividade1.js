let listaDeCompras = ["maçã", "banana", "arroz", "chocolate", "café"];

listaDeCompras.push("bolacha");

listaDeCompras.shift();

let itensComMaisDe5 = listaDeCompras.filter(item => item.length > 5);

console.log("Lista de compras:", listaDeCompras);
console.log("Itens com mais de 5 caracteres:", itensComMaisDe5);
