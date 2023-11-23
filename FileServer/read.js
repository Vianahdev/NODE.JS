let fs = require('fs');

fs.readFile('HelloWord.txt', 'UTF8', (error, data)=>{
  if(error){
    throw error
  }else{
    console.log(data);
  }
})