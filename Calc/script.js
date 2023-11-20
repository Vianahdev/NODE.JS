let calc = require("./calc");

let args = process.argv.slice(2);

let num1 = Number(args[1]);
let num2 = Number(args[2]);

let result = "";

if (args[0] == "+") {
  result = calc.Soma(num1, num2);
} else if (args[0] == "-") {
  result = calc.Sub(num1, num2);
} else if (args[0] == "*") {
  result = calc.Mult(num1, num2);
} else if (args[0] == "/") {
  result = calc.Div(num1, num2);
}

console.log(result);