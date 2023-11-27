//Quadrado
module.exports.areaQuadrado = (lado)=>{
  return lado * lado;
}

//Triangulo
module.exports.areaTriangulo = (base, altura)=>{
  return (base * altura) / 2;
}

//Circulo
module.exports.areaCirculo = (raio)=>{
  return Math.PI * (raio * raio);
}

//Retangulo
module.exports.areaRetangulo = (base, altura)=>{
  return base * altura
}