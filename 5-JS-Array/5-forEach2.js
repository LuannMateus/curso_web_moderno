Array.prototype.forEach2 = function(funcao) {
    for (let i = 0; i < aprovados.length; i++) {
        funcao(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) { 
    console.log(`${indice + 1}) ${nome} `)
})

