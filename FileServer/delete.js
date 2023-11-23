let fs = require('fs');

fs.unlink("HelloWord.txt", function (error) {
  if (error) {
    throw error
  }

  console.log("Arquivo excluido com sucesso.")
})
