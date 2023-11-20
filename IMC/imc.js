module.exports = function calcImc(altura, peso) {
  return (peso / (altura * altura) * 100) * 100
}
