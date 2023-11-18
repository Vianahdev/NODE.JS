let args = process.argv.slice(2);

let a = Number(args[0]);
let b = Number(args[1]);

let result = Soma(a,b)

function Soma(num1, num2){
  return num1 + num2
}

console.log(args);
console.log(result);



