let fs = require('fs');

fs.appendFile("LoremIpsun.txt", " - Olá Brasil", (error) => {
  if (error) {
    throw error
  }

  console.log("Arquivo modificado com sucesso.");
})
