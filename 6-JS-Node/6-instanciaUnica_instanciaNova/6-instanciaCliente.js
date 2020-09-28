// Importando um objeto.
const instanciaA = require('./6-instanciaUnica')
const instanciaB = require('./6-instanciaUnica')

// Importando uma factory funtion e chamando a função.
const instanciaC = require('./6-instanciaNova')()
const instanciaD = require('./6-instanciaNova')()

// Instância Única.
instanciaA.inc()
instanciaA.inc()
console.log(instanciaA.value, instanciaB.value)

// Instância Nova..
instanciaC.inc()
instanciaC.inc()
console.log(instanciaC.value, instanciaD.value)