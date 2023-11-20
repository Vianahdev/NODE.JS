let calc = require("./calc.js")

let args = process.argv.slice(2)

let l_pesoAntigo = Number(args[0])
let l_pesoAtual = Number(args[1])

let l_sensiAntiga = Number(args[2])

let l_result = calc(l_pesoAntigo, l_pesoAtual, l_sensiAntiga)

console.log(l_result)
