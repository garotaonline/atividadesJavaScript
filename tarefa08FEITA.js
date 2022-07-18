// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

lista = "23, 56, 20, 10, 34, 15"


temporada = lista => {
    pontuacao = lista.split(", ")
    recordes = 0
    pior = 1
    menorPontuacao = pontuacao[0]
    maiorPontuacao = pontuacao[0]

    for(let i=0; i < pontuacao.length; i++) {
        if(pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i]
            recordes++
        } else if(pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i]
            pior = 1 + i
        }
    }

    return console.log([recordes, pior])
}

temporada(lista)