let fs = require('fs');

fs.appendFile("HelloWord.txt", " - Olá Brasil", function (error) {
  if (error) {
    throw error
  }

  console.log("Arquivo modificado com sucesso.")
})
