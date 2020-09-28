console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Lucas'
// obj1['nome'] = 'Pedro'
console.log(obj1)

function Obj(nome) {
    this.name = nome
    this.exec = function() {
        console.log('Exec....')
    }
}

const obj2 =  new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
