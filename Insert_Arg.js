let args = process.argv.slice(2);

let l_num1 = Number(args[1]);
let l_num2 = Number(args[2]);

let l_result = Calc(args[0], l_num1, l_num2);

function Calc(oper, num1, num2){
    if(oper == 's' || oper == 'S'){
        return num1 + num2;
    }else if(oper == 'm' || oper == 'M'){
        return num1 * num2;
    }else{
        console.log('Favor inserir um operador valido: "S ou M".');
    }
}

console.log(l_result);