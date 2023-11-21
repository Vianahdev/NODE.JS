let fs = require('fs');

fs.writeFile('teste.txt', 'Hello Word', function(error){
  if (error){
    throw error
  };

  console.log("Arquivo criado com sucesso..")

});

fs.appendFile("teste.txt", " - Olá Mundo", function (error) {
  if (error) {
    throw error
  }

  console.log("Arquivo modificado com sucesso..")
}) 