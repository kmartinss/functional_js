function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {

        try {
            con.log('temp'); //erro
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!');
            } else {
                resolve(valor);
            }
        } catch (e) {
            reject(e);
        }
    })
}

funcionarOuNao('testando...', 0.1)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v), //erro
        err => console.log(`Erro esp.: ${err}`)
    )
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!'))

//catch => trata o erro