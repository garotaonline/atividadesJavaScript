// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

inteiros = [1, 2, -3, -9]

percorrer = inteiros => {
    negativos = 0
    for(let i=0; i < inteiros.length; i++) {
        if(inteiros[i] < 0) {
            negativos++
        }
    }
}

percorrer(inteiros)
console.log(`Negativos: ${negativos}`)
