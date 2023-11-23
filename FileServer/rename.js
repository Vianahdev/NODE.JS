let fs = require('fs');

fs.rename('HelloWord.txt', 'OlaMundo.txt', function(error){
  if(error){
    throw error;
  }else{
    console.log('Nome do arquivo alterado com sucesso.');
  }
})