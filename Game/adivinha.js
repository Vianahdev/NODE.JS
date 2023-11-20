module.exports = function kick(numkick) {
  let numchosen = Math.round(Math.random() * 10);

  if (numchosen == numkick) {
    return "PARABÉNS VOCÊ ACERTOU, CHUTOU BEM!!!!!!"
  } else {
    return "INFELIZMENTE VOCÊ ERROU TENTE NOVAMENTE, O NUMERO CORRETO É " + numchosen
  }
}

