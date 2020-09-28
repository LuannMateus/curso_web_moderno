// Factory function.
function criarPessoa(name) {
    this.nome = name

    this.falar = () => {
        console.log(`My name is ${this.nome}`)
    }
}

const p2 = new criarPessoa('Luan')
p2.falar()
console.log(p2.nome)