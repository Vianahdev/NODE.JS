let imc = require('./imc.js');

let args = process.argv.slice(2);

let altura = Number(args[0]);
let peso = Number(args[1]);

let result = Math.floor(imc(altura,peso));


if (result < 18) {
  console.log("Baixo do peso, " + "seu imc e " + result)
} else if (result > 18 && result < 24) {
  console.log("Normal, " + "seu imc e " + result)
} else if (result > 25 && result < 29) {
  console.log("Sobrepeso, " + "seu imc e " + result)
} else if (result > 30) {
  console.log("Obesidade, " + "seu imc e " + result)
}






