let fs = require('fs');

fs.unlink("LoremIpsun.txt", (error)=>{
  if (error) {
    throw error
  }

  console.log("Arquivo excluido com sucesso.")
})
