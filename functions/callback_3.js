//map #01

const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
console.log(nums.map(dobro));

const nomes = ['fabiano', 'karine', 'samara', 'serello', 'sid'];
const primeiraLetra = texto => texto[0];
console.log(nomes.map(primeiraLetra));

const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);

// map #02
const carrinho = [{
    nome: 'Caneta',
    qtde: 10,
    preco: 7.99
}, {
    nome: 'Impressora',
    qtde: 0,
    preco: 649.50
}, {
    nome: 'Caderno',
    qtde: 4,
    preco: 27.10
}, {
    nome: 'Lapis',
    qtde: 3,
    preco: 5.82
}, {
    nome: 'Tesoura',
    qtde: 1,
    preco: 19.20
}, ];

//desafio #01 -> Função que traz somente os nomes dos produtos
const getNome = produto => produto.nome;
console.log(carrinho.map(getNome));

//desafio #02 -> Função que multiplica a quantidade pelo preço
const getTotal = produto => produto.qtde * produto.preco;
const totais = carrinho.map(getTotal);
console.log(totais);

//criando meu próprio map
// Array.prototype.meuMap = function (fn) {
//     const novoArray = [];
//     for (let i = 0; i < this.length; i++) {
//         const result = fn(this[i], i, this)
//         novoArray.push(result);
//     }
//     return novoArray;
// }

// const getNome = produto => produto.nome;
// console.log(carrinho.meuMap(getNome));

// const getTotal = produto => produto.qtde * produto.preco;
// const totais = carrinho.meuMap(getTotal);
// console.log(totais);


