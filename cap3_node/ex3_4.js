const prompt = require("prompt-sync")();

const pesoKg = Number(prompt("Peso(kg): "));
const consumo = Number(prompt("Consumo Diário(gr): "));
const duracao = Math.floor((pesoKg * 1000) / consumo);
const sobra = (pesoKg * 1000) % consumo;

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);
