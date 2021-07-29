const primeiroElemento = arrayOuString => arrayOuString[0];

const letraMinuscula = letra => letra.toLowerCase();

new Promise(function (resolve) {
        resolve(['Karine', 'Fabiano', 'Serello', 'Samara']);
    })
    .then(primeiroElemento) //pega o primeiro valor e passa pro próx. then
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log);