const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * 9 * * 5', () => {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(_ => {
    task1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000)

// setInterval 
// setImmediate

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 9
regra.second = 30

const taks2 = schedule.scheduleJob(regra, _ => {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})