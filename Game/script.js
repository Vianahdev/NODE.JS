let kick = require('./adivinha.js');

let args = process.argv.slice(2);

let numkick = Number(args[0]);

let result = kick(numkick);

console.log(result);

