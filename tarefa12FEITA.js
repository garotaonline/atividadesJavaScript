// Faça um algoritmo que calcule o fatorial de um número.

fatorial = numero => {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))

