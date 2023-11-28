const http = require('http');

http.createServer((request, response)=>{

  response.writeHead(200,{'Content-Type': 'text/html'});
  response.end('<h1>Hello Word</h1>');

}).listen(3000,(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log('Servido Online, rodando na porta 3000')
  }
})