// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

numeros = [1, 2, 3, 4, 5, 6, 7 ,8, 9]

leitura = numeros => {
    pares = 0
    impares = 0
    for(let i=1; i <= numeros.length; i++) {
        if (i % 2 === 0) {
            pares++
        } else if (i % 2 === 1) {
            impares++
        }
    }
}

leitura(numeros)
console.log(`Pares: ${pares}, Impares: ${impares}`)