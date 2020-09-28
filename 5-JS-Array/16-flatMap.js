const escola = [{
    nome: 'Turma M1',
    alunos: [
        {
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }

    ]    
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotas = alunos => alunos.nota
const getTurmaNota = turma => turma.alunos.map(getNotas)

const turmaNotas = escola.map(getTurmaNota)

console.log(turmaNotas)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getTurmaNota)

console.log(notas2)