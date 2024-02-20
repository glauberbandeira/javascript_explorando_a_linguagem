console.log(`trabalho com listas`);

const listaDeDestino = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

listaDeDestino.push(`Curitiba`) // adicionando item na lista
// Imprimir uma lista
console.log("Destinos possiveis;");
console.log(listaDeDestino);

listaDeDestino.splice(1, 1) // remover item
console.log(listaDeDestino);
console.log(listaDeDestino[1]); // imprimindo um unico elemento