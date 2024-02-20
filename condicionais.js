console.log(`trabalho com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
console.log("Destinos possiveis;");
console.log(listaDeDestino); // Imprimir uma lista

if(idadeComprador > 18) {
    console.log(`Maior de idade, pacote vendido`)
    listaDeDestino.splice(1, 1) // remover item
} else {
    console.log("Menor de idade nao pode comprar")
}
console.log(listaDeDestino);


