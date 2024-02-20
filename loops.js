console.log(`/n Trabalho com condicionais`);

const listaDeDestino = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("/n Destinos possiveis;");
console.log(listaDeDestino); // Imprimir uma lista

const podeComprar =  idadeComprador > 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    if(listaDeDestino[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste)

