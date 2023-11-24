let fs = require('fs');

fs.rename("LoremIpsun.txt", "Loremipsun.txt", (error) => {
  if (error) {
    throw error
  } else {
    console.log("Nome do arquivo alterado com sucesso.")
  }
})