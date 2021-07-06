function bomDia() {
    console.log('Bom dia :)');
}

const boaTarde = function () {
    console.log('Boa tarde :*');
}

//Passar uma função como parâmetro para outra
function doAnything(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

doAnything(3);
doAnything(bomDia);
doAnything(boaTarde);

// Retornar função a partir de outra função
function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
