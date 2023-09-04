let calc = require("./calc");

let args = process.argv.slice(2);

let l_num1 = Number(args[1]);
let l_num2 = Number(args[2]);

let l_result = "";

if(args[0] == '+'){
    l_result = calc.Soma(l_num1, l_num2);
}else if(args[0] == '*'){
    l_result = calc.Mult(l_num1, l_num2);
}else if(args[0] == '-'){
    l_result = calc.Sub(l_num1, l_num2);
}else if (args[0] == '/'){
    l_result = calc.Div(l_num1, l_num2);
}else{
    console.log('Favor inserir um valor valido.');
}

console.log(l_result);

