class Avo {
    constructor(sobrenome = 'Lucas') {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }   
}

class Filho extends Pai {
    constructor(sobrenome) {
        super(sobrenome)
    }
}

const filho = new Filho
console.log(filho)