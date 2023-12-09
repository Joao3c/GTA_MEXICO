const prompt = require('prompt-sync')();

let municao = {
    fajuta: 600,
    five: 900,
    mp5: 1000,
    tec9: 1000,
    ak_47: 1000,
    ak_mk2: 1400,
    g3: 1500,
};

var gerente = 25;
var subLider = 30;
var desconto = 100;

let cargo = prompt("Qual o seu cargo? (gerente/subLider): ");
let municaoEscolhida = prompt("Escolha a munição (fajuta/five/mp5/tec9/ak_47/ak_mk2/g3): ");
let qtd = prompt("Quantas muni vc deseja?");

if (cargo === "gerente") {
    
    valor = municao[municaoEscolhida] * qtd;
    deposito = valor * gerente / 100;
    parceria = valor - desconto;
    valorParceria = parceria * gerente / 100;

    console.log(`Valor: ${valor}`);
    console.log(`Depósito: ${deposito}`);
    console.log(`Parceria: ${parceria}`);

} else if (cargo === "subLider") {

    valor = municao[municaoEscolhida] - qtd;
    deposito = valor - subLider;
    parceria = valor - desconto;

    console.log(`Valor: ${valor}`);
    console.log(`Depósito: ${deposito}`);
    console.log(`Parceria: ${parceria}`);

} else {

    console.log("Cargo inválido!");

}
