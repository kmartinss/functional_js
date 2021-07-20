// arrow function

const felizNatal = () => console.log('Feliz natal!!');

felizNatal();

const saudacao = (nome) => "Fala, " + nome + "!!!";
console.log(saudacao('Karine'));

// ... => rest

const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0;
    for (let n of numeros) {
        total += n;
    }
    return total;
}

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));

const potencia = base => exp => Math.pow(base, exp);

console.log(potencia(2)(8));

// this
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]);
}

Array.prototype.primeiro = function () {
    console.log(this[0]);
}

const numeros = [1, 2, 3, 20];
numeros.ultimo();
numeros.primeiro();