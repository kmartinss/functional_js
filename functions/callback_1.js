//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function exec(fn, a, b) {
    return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
const subtrair = (w, z) => w - z;
const somar = (w, z) => w + z;

exec(somarNoTerminal, 20, 20);
exec(subtrairNoTerminal, 40, 20);

const resultSubtracao = exec(subtrair, 50, 25);
console.log(resultSubtracao);

const resultSoma = exec(somar, 50, 25);
console.log(resultSoma);

//cb => callback
const cb = () => console.log('Exec...');

setInterval(cb, 1000);