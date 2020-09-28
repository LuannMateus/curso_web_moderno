/*06)​ Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a 
segunda retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capInicial, taxaJuros, temAplic) {

    let motante = capInicial * taxaJuros * temAplic
    
    this.show = _ => { console.log(motante)}
}   

const pessoa1 = new jurosSimples(1000, 0.1, 3)
pessoa1.show()

function jurosCompostos(capInicial, taxaJuros, temAplic) {
    let montante = capInicial * (1 + taxaJuros) ** temAplic
    montante -= capInicial
    montante = montante.toFixed(2)

    this.show = _ => { console.log( montante) }
}

const pessoa2 = new jurosCompostos(500000, 0.05, 3)
pessoa2.show()