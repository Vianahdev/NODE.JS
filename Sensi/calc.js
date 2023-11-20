module.exports = function calcSensi (peso1 , peso2, sensi){
    return (((peso2 * 100) / peso1) * sensi) / 100;
}

