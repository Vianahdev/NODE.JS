# NODE.JS

### O que e o `Node.js`?

O `Node.js` e uma tecnologia que consegue executar codigo Javascript, ele permite a criação de aplicações Javascript sem precisar do browser para podermos executar.

* Aplicações por linha de comando.
* Criação de aplicação que ira rodar no servidor.
* Criação de aplicações para desktop.

**OBS. as funções `Document` e `Window` não funcionam no `Node.js` devido a arvore DOM ser somente uma configuração padrão para os navegadores.**

<br>
 
# ARGUMENTOS - NODE.JS

Podemos coletar dados do console(prompt) via argumentos do `Node.js`, estes argumentos são encapsulados em forma de `"Array"`, para podermos coletar os dados desta matriz podemos utilizar a propriedade `process.argv`. O primeiro elemento será sempre `process.execPath` onde o path de implantação do `Node.js` foi implantado. O segundo elemento será o caminho para o arquivo JavaScript que está sendo executado. Os elementos restantes serão quaisquer argumentos adicionais de linha de comando.

* **Exemplo**
    ```js    
    console.log(process.argv);
    
    [
    'C:\\Program Files\\nodejs\\node.exe',
    'E:\\Desenvolvimento Web\\AULAS\\NODE.JS\\Insert_Arg.js',
    ]
    ```

Podemos utilziar a função `Slice()` passando como parametro `2` para "excluir" os dois primeiros argumentos da matriz.

* **Exemplo**
    ```js    
    console.log(process.argv.slice(2));
    
    [ ]
    ```

### Calculadora

```js
let args = process.argv.slice(2);

let l_num1 = Number(args[1]);
let l_num2 = Number(args[2]);

let l_result = Calc(args[0], l_num1, l_num2);

function Calc(ope, num1, num2){
    if(ope == '+'){
        return num1 + num2;
    }else if(ope == '*'){
        return num1 * num2;
    }else if(ope == '-'){
        return num1 - num2;
    }else if(ope == '/'){;
        return num1 / num2;
    }else{
        console.log('Favor inserir um operador valido.');
    }    
}   

console.log(l_result);
```

