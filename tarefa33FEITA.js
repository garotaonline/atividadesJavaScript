// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInteiro = [5, 6, 7, 8]
let vetorString = ["1", "2", "3", "4"]
let vetorDouble = [8.1, 8.2, 8.3, 8.4]

console.log(vetorString.concat(vetorInteiro, vetorDouble))

let grupo = console.log(vetorString.concat(vetorInteiro[0], vetorDouble[1]))
