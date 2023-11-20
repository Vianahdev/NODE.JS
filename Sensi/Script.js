let calcSensi = require('./calc.js')

let args = process.argv.slice(2);

let pesoAntigo = Number(args[0]);
let pesoAtual = Number(args[1]);
let sensiAntiga = Number(args[2]);

let result = calcSensi(pesoAntigo, pesoAtual, sensiAntiga);

console.log(result);
