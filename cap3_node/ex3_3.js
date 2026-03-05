const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo(anos): "));
const quadrienios = Math.floor(tempo/4);
const slTotal = salario * (quadrienios * 0.01) + salario;

console.log(`O funcionário tem direito há: ${quadrienios} quadriênios.`)
console.log(`Salário Total R$: ${slTotal.toFixed(2)}`)






