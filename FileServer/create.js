let fs = require("fs")

fs.writeFile("HelloWord.txt", "Hello Word", function (error) {
  if (error) {
    throw error
  }

  console.log("Arquivo criado com sucesso.")
})
