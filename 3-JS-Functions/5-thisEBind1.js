const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falei = pessoa.falar
falei() // Conflito entre paradigmas: Function x OO

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()