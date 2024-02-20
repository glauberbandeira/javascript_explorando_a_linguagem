console.log(`trabalho com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possiveis;");
console.log(listaDeDestino); // Imprimir uma lista

if(idadeComprador > 18 || estaAcompanhada == true) {
    console.log(`Boa viagem`)
    console.log(`Maior de idade, pacote vendido`)
    listaDeDestino.splice(1, 1) // remover item
} else {
        console.log("Menor de idade nao pode comprar")
}

console.log(`Embarque: \n\n`)
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Boa viagem`)
} else {
    console.log(`Voce nao pode embarcar.`)
}

console.log(listaDeDestino);


