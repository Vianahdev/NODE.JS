let args = process.argv.slice(2);

let l_pesoAntigo = Number(args[0]);
let l_pesoAtual = Number(args[1]);

let l_sensiAntiga = Number(args[2]);

let l_result = calcSensi(l_pesoAntigo, l_pesoAtual, l_sensiAntiga);

function calcSensi (peso1 , peso2, sensi){
    return (((peso2 * 100) / peso1) * sensi) / 100;
}

console.log(l_result);
