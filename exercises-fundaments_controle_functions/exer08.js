/*08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
ele mantémregistro de todos os as pontuações feitas por jogo. 
Após cada jogo ele anota no novo valor e confere se omesmo é maior ou menor que seu melhor e pior desempenho. 
Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, 
escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele 
bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).*/

const values = ['1', '2', '44', '1', '44', '22']

const gameResults = values => {
    let totB = 0
    let totW = []

    let max = Math.max(...values)
    let min = Math.min(...values)

    for (c in values) {
        if (values[c] == max) {
            totB += 1
        } 
        if (values[c] == min) {
            totW.push(Number(c) + 1)
        }
    }

    const resultadoGeral = [totB, totW]
    return resultadoGeral
}

console.log(gameResults(values))
