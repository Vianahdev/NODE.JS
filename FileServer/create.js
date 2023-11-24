let fs = require("fs")

fs.writeFile(
  "LoremIpsun.txt", 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book', (error)=>{
    if(error){
      throw error
    }else{
      console.log('Arquivo criado com sucesso.')
    }
  }
)

