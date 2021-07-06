// function declaration
function bomDia() {
    console.log('Bom dia :)');
}

bomDia();

// function expression
const boaTarde = function () {
    console.log('Boa tarde :)')
}

boaTarde();

function somar(a, b) {
    return a + b;
}

const resultado = somar(5, 5);
console.log(resultado);

//NaN (not a number) => quando se soma um número + undefined